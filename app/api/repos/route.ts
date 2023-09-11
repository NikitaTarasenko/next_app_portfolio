import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const repos = await fetch(
        'https://api.github.com/user/NikitaTarasenko/repos',
    ).then((res) => res.json);
    return NextResponse.json(repos);
}
