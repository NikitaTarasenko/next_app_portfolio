import { Metadata } from 'next';

async function getAllRepos() {
    const res = await fetch(
        'https://api.github.com/users/NikitaTarasenko/repos',
    ).then((res) => res.json());
    return res;
}
export const metadata: Metadata = {
    title: 'My repos | Next App',
};
export default async function github() {
    const data = await getAllRepos();

    console.log(await data);
    return <div>{data[0].name}</div>;
}
