import MintRequest from "../components/MintRequest"
import Navbar from "../components/Navbar"

const Admin = () => {
    return (
        <div>
            <Navbar queryBar={false} isAdmin={true}/>
            <MintRequest />
            <MintRequest />
            <MintRequest />
            <MintRequest />
            <MintRequest />
        </div>
    )
}

export default Admin
