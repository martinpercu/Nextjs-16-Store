export default function Layout({children}: {children: React.ReactNode}) {
    return(
        <main>
            <nav>
                <h2>Category Navigation</h2>
            </nav>
            {children}
        </main>
    )

}