import ProfileForm from "../../components/ProfileForm/ProfileForm";

export default function ProfilePage({ user, setUser }) {

  return (
    <>
      <ProfileForm user={user} setUser={setUser} />
    </>
  )
}
