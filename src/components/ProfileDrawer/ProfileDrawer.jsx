import DrawerRight from "../Drawers/DrawerRight";


export default function ProfileDrawer({ children }) {
    return (
        <DrawerRight avater={children}>
            {/* <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"> */}
            {/* <ul className="bg-primary"> */}
            <ul className="menu p-4 w-80 min-h-full text-base-content bg-primary">
                <li>
                    <a className="justify-between">
                        Profile
                        {/* <span className="badge">New</span> */}
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
        </DrawerRight>
    )
}
