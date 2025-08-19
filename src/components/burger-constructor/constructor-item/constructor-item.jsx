import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ConstructorItemStyles from './constructor-item.module.css'

export default function ConstructorItem({ element, index, moveFilling }) {
	const ref = useRef(null)
	const handleRef = useRef(null)

	const [{ isOver }, drop] = useDrop(() => ({
		accept: 'constructor-item',
		collect: (monitor) => ({ isOver: monitor.isOver() }),
		hover(item, monitor) {
		const dragIndex = item.index
		const hoverIndex = index
		if (dragIndex === hoverIndex) return

		const node = ref.current
		if (!node) return
		const rect = node.getBoundingClientRect()
		const middleY = (rect.bottom - rect.top) / 2
		const clientOffset = monitor.getClientOffset()
		const hoverClientY = clientOffset.y - rect.top

		if (dragIndex < hoverIndex && hoverClientY < middleY) return
		if (dragIndex > hoverIndex && hoverClientY > middleY) return

		moveFilling(dragIndex, hoverIndex)
		item.index = hoverIndex
		},
	}), [index, moveFilling])

	const [{ isDragging }, drag] = useDrag(() => ({
		type: 'constructor-item',
		item: { uid: element.uid, index },
		collect: (monitor) => ({ isDragging: monitor.isDragging() }),
	}), [element.uid, index])

	drop(ref)
	drag(handleRef)

	const className = [
    ConstructorItemStyles.elementContainer,
    isDragging && ConstructorItemStyles.dragging,
    isOver && ConstructorItemStyles.over,
  ]
    .filter(Boolean)
    .join(' ')

	return (
		<div ref={ref} className={className}>
			<span ref={handleRef}>
				<DragIcon type='primary' />
			</span>
			<ConstructorElement
				text={element.name}
				price={element.price}
				thumbnail={element.image}
			/>
		</div>
	)
}