

export default function DrawerRight({ avater, children }) {
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4">{avater}</label>
            </div>
            <div className="drawer-side z-10">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                {/* <ul className="menu p-4 w-80 min-h-full text-base-content bg-primary"> */}
                {/* Sidebar content here */}
                {/* <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li> */}
                {children}
                {/* </ul> */}
            </div>
        </div>
    )
}
