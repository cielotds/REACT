const UserCards = ({ users }) => {
    return (
        <>
        <div className="ml-5 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user, index) => (
                <div className="border p-4 rounded-lg shadow-md bg-white" key={index}>
                    <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
                    <p className="text-gray-600 mb-1">Email: {user.email}</p>
                    <p className="text-gray-600">Password: {user.password}</p>
                </div>
            ))}
        </div>
        </>
    );
}

export default UserCards;