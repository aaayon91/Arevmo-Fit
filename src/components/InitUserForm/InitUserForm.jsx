export default function InitUserForm({ user, setUser }) {
  return (
    <>
      <form>
        <label>
          Height:
          <input type="text" name="height" value="" />
        </label>
        <label>
          Weight:
          <input type="text" name="weight" value="" />
        </label>
      </form>
    </>
  );
}
