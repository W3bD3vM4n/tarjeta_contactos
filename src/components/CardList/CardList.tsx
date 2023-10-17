import { Person } from "../../types/Person";

export const CardList = () => {
    
    const persons: Array<Person> = [
        {
            name: "Mateo",
            email: "mateo@correo.com",
            imageUrl: "src/assets/man-avatar-1.png",
        },
        {
            name: "Juan",
            email: "juan@correo.com",
            imageUrl: "src/assets/man-avatar-2.png",
        },
        {
            name: "Maria",
            email: "maria@correo.com",
            imageUrl: "src/assets/woman-avatar-1.png",
        },
    ];

    return (
        <>
            <ul
                role="list"
                className="p-6 divide-y divide-slate-200 bg-gray-200"
            >
                {persons.map((person) => {
                    return (
                        <li className="flex py-4 first:pt-0 last:pb-0">
                            <img
                                className="h-10 w-10 rounded-full"
                                src={person.imageUrl}
                                alt=""
                            />
                            <div className="ml-3 overflow-hidden">
                                <p className="text-sm font-medium text-slate-900">
                                    {person.name}
                                </p>
                                <p className="text-sm text-slate-500 truncate">
                                    {person.email}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>

        </>
    );
};
