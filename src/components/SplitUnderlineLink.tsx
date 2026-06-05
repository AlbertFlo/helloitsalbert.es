import styles from './SplitUnderlineLink.module.css'

interface Props {
    href: string
    children: React.ReactNode
    className?: string  // allow Tailwind overrides from outside (font-size, color, etc.)
}

export function SplitUnderlineLink({ href, children, className = '' }: Props) {
    return (
        <a href={href} className={`${styles.link} ${className}`}>
            <span>{children}</span>
        </a>
    )
}