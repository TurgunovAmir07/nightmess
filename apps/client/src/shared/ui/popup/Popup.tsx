import { useEffect, type ReactNode } from 'react'
import cl from './Popup.module.scss'
import { ClosePopupButton } from '@/features/ClosePopup'

export const Popup = ({
	children,
	isOpen,
	setIsOpen,
	title,
	isLongTitle,
	isScrollAnimation
}: {
	children: ReactNode
	isOpen: boolean
	setIsOpen: (value: boolean) => void
	title?: string
	isLongTitle?: boolean
	isScrollAnimation?: boolean
}) => {
	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsOpen(false)
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEsc)
		}

		return () => {
			document.removeEventListener('keydown', handleEsc)
		}
	}, [isOpen, setIsOpen])

	return (
		<>
			<span className={`${cl.blackout} ${isOpen && cl.blackout_open}`} />
			<div
				className={`${cl.root} ${isOpen && cl.root_open} ${
					isScrollAnimation && cl.root_scroll
				}`}
				onClick={() => setIsOpen(false)}
			>
				<div
					className={`${cl.root__content} ${
						isScrollAnimation && cl.root__content_scroll
					} ${isOpen && cl.root__content_open}`}
				>
					<div
						className={cl.root__content_header}
						onClick={e => e.stopPropagation()}
					>
						<div
							className={`${cl.root__content_header_title} ${
								isLongTitle &&
								cl.root__content_header_title_long
							}`}
						>
							{title}
						</div>
						<ClosePopupButton onClick={() => setIsOpen(false)} />
					</div>
					<div
						className={cl.root__content__main}
						onClick={e => e.stopPropagation()}
					>
						<div className={cl.root__content__main_children}>
							{children}
						</div>
					</div>
					<div
						className={cl.root__content_footer}
						onClick={e => e.stopPropagation()}
					/>
				</div>
			</div>
		</>
	)
}
