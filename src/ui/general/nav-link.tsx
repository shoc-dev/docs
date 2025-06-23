interface NavLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  children?: React.ReactNode;
}

export default function NavLink({ className, children, href, target, ...props }: NavLinkProps){

    return <a 
        href={href}
        className={className ?? "x:focus-visible:nextra-focus x:text-primary-600 x:underline x:hover:no-underline x:decoration-from-font x:[text-underline-position:from-font]"} {...props}
        target={target ?? (href?.startsWith("https://") || href?.startsWith("http://") ? "_blank" : undefined)}
        >
        {children}
    </a>

}