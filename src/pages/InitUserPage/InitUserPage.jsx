import InitUserForm from "../../components/InitUserForm/InitUserForm";

export default function InitUserPage({ user, setUser }) {
    return (
        <InitUserForm user={user} setUser={setUser} />
    )
}