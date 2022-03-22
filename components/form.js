import { useAuth0 } from "@auth0/auth0-react";

export default function Form({onSubmit, text, textSet}) {
    const {
        loginWithRedirect,
        isAuthenticated,
        user,
        logout
      } = useAuth0();

    return (
    <form className="mt-10" onSubmit={onSubmit}>
      <textarea
        rows="3"
        className="border border-gray-300 rounded-l w-full block px-2 py-1"
        onChange={(e) => textSet(e.target.value)}
        value={text}
      ></textarea>

      <div className="mt-4">
        {isAuthenticated ? (
          <div className="flex items-center space-x-2">
            <button className="bg-yellow-500 hover:bg-yellow-400 transition-all text-white px-2 py-1 rounded">
              Send
            </button>
            <img src={user.picture} width={30} className="rounded-full" />
            <span>{user.name}</span>
            <button
              typeof="button"
              onClick={() =>
                logout({ returnTo: `${process.env.NEXT_PUBLIC_URL}/blog` })
              }
            >
              x
            </button>
          </div>
        ) : (
          <button
            className="bg-yellow-500 hover:bg-yellow-400 transition-all text-white px-2 py-1 rounded"
            typeof="button"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        )}
      </div>
    </form>
  );
}
