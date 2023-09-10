import * as React from 'react';

type IconsType = {
    className?: string | undefined;
};
export const GithubIcon = ({ className, ...rest }: IconsType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h512v512H0z" />
        <path
            fill="currentColor"
            d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
        />
    </svg>
);

// #0A66C2
export const LinkedInIcon = ({ className, ...rest }: IconsType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h256v256H0z" />
        <g fill="none">
            <rect width={256} height={256} fill="#fff" rx={60} />
            <rect width={256} height={256} fill="#0A66C2" rx={60} />
            <path
                fill="#fff"
                d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
            />
        </g>
    </svg>
);

export const SunIcon = ({ className, ...rest }: IconsType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <g strokeDasharray="2">
                <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
                <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.2s"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
            </g>
            <path
                fill="currentColor"
                d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                opacity="0"
            >
                {/* @ts-ignore */}
                <set attributeName="opacity" begin="0.5s" to="1" />
            </path>
        </g>
        <g fill="currentColor" fillOpacity="0">
            <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
                <animate
                    id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="22" cy="2" r="3" fill="#fff">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="3;12"
                />
            </circle>
            <circle cx="22" cy="2" r="1">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="1;10"
                />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="6"
            fill="currentColor"
            mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
        >
            {/* @ts-ignore */}
            <set attributeName="opacity" begin="0.5s" to="0" />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.1s"
                dur="0.4s"
                values="6;10"
            />
        </circle>
    </svg>
);

export const MoonIcon = ({ className, ...rest }: IconsType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <rect
            x="0"
            y="0"
            width="24"
            height="24"
            fill="rgba(255, 255, 255, 0)"
        />
        <g
            fill="none"
            stroke="currentColor"
            strokeDasharray="2"
            strokeDashoffset="2"
            strokeLinecap="round"
            strokeWidth="2"
        >
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.2s"
                    dur="0.2s"
                    values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.2s"
                    dur="0.2s"
                    values="2;0"
                />
            </path>
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.5s"
                    dur="0.2s"
                    values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.5s"
                    dur="1.2s"
                    values="2;0"
                />
            </path>
            <animateTransform
                attributeName="transform"
                dur="30s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
            />
        </g>
        <g fill="currentColor">
            <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <g
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
            {/* @ts-ignore */}
            <set attributeName="opacity" begin="0.6s" to="0" />
        </g>
        <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="18" cy="6" r="12" fill="#fff">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="12;3"
                />
            </circle>
            <circle cx="18" cy="6" r="10">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="10;1"
                />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="10"
            fill="currentColor"
            mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
            opacity="0"
        >
            {/* @ts-ignore */}
            <set attributeName="opacity" begin="0.6s" to="1" />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.6s"
                dur="0.4s"
                values="10;6"
            />
        </circle>
    </svg>
);

export const LinkArrow = ({ className, ...rest }: IconsType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
        />
    </svg>
);

export const CircularText = ({ className, ...rest }: IconsType) => (
    <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1080.000000pt"
        height="1080.000000pt"
        viewBox="0 0 1080.000000 1080.000000"
        preserveAspectRatio="xMidYMid meet"
    >
        <g
            transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
        >
            <path
                d="M5375 7848 c-2 -7 -6 -140 -8 -295 l-5 -283 52 0 53 0 7 77 c3 42 6
   172 6 288 0 235 3 225 -66 225 -19 0 -36 -6 -39 -12z"
            />
            <path
                d="M4993 7660 c-85 -20 -162 -115 -163 -202 0 -41 24 -113 48 -141 30
   -34 102 -75 145 -81 58 -9 135 9 191 44 51 33 57 53 24 81 -30 24 -40 24 -84
   -6 -24 -16 -51 -25 -76 -25 -51 0 -117 33 -114 57 2 14 20 20 87 31 46 7 102
   18 124 25 22 6 48 11 59 12 54 1 44 85 -17 149 -58 60 -131 78 -224 56z m111
   -90 c24 -9 63 -56 54 -65 -2 -3 -35 -9 -74 -14 -38 -6 -84 -13 -101 -17 -29
   -6 -33 -4 -33 15 0 67 80 109 154 81z"
            />
            <path
                d="M5675 7639 c-56 -28 -92 -74 -111 -137 -41 -144 68 -272 232 -272 76
   0 109 11 152 53 53 50 66 83 66 164 -1 76 -10 99 -61 149 -69 65 -197 85 -278
   43z m148 -80 c27 -7 44 -21 63 -51 24 -38 25 -44 14 -82 -17 -58 -69 -106
   -114 -106 -48 0 -116 65 -116 110 0 47 36 109 73 125 39 17 34 17 80 4z"
            />
            <path
                d="M4683 7585 l-52 -24 -3 -157 -3 -157 -106 108 c-102 104 -107 108
   -140 101 -19 -3 -45 -15 -57 -24 l-24 -19 157 -149 c86 -82 161 -152 168 -155
   7 -3 36 4 65 17 l52 24 0 230 c0 126 -1 230 -2 229 -2 0 -27 -11 -55 -24z"
            />
            <path
                d="M6101 7398 c-114 -236 -161 -338 -161 -348 0 -14 80 -52 96 -46 7 3
   29 39 49 81 l35 76 40 -41 c47 -49 94 -70 155 -70 63 0 104 20 150 72 59 68
   81 159 53 225 -16 39 -88 113 -109 113 -10 0 -21 5 -24 10 -3 6 -31 10 -62 10
   -44 0 -54 3 -50 15 6 15 -32 47 -70 59 -21 7 -29 -5 -102 -156z m282 -39 c71
   -77 -6 -224 -108 -205 -44 9 -95 66 -95 107 0 49 44 115 90 132 31 12 85 -4
   113 -34z"
            />
            <path
                d="M4115 7294 c-206 -73 -205 -356 1 -421 49 -15 56 -15 111 2 83 26
   134 63 172 125 24 40 28 80 7 80 -7 0 -27 3 -43 6 -26 5 -31 3 -37 -19 -14
   -59 -116 -112 -175 -91 -48 17 -44 21 141 149 36 26 69 53 72 62 10 25 -34 74
   -88 99 -57 27 -102 29 -161 8z m111 -95 c19 -21 19 -21 -11 -45 -67 -54 -134
   -96 -144 -90 -14 9 -14 44 0 85 12 35 67 70 110 71 14 0 34 -9 45 -21z"
            />
            <path
                d="M6665 7220 c-77 -18 -141 -83 -166 -168 -28 -97 60 -233 179 -275 69
   -25 94 -17 90 30 -3 32 -8 37 -54 56 -65 28 -84 44 -101 86 -13 30 -10 91 4
   91 3 0 57 -43 120 -95 64 -52 121 -95 128 -95 33 0 75 86 75 153 0 25 -6 60
   -14 79 -14 34 -85 106 -122 125 -27 15 -104 22 -139 13z m114 -104 c37 -20 51
   -39 61 -80 5 -24 4 -41 -5 -53 -12 -16 -15 -15 -46 9 -19 14 -54 44 -79 67
   -43 39 -44 41 -26 56 25 19 59 19 95 1z"
            />
            <path
                d="M3635 7006 c-47 -22 -98 -66 -156 -136 -60 -71 -129 -165 -129 -173
   0 -5 30 -28 203 -162 29 -22 87 -69 131 -103 43 -35 85 -62 94 -60 8 2 38 32
   65 68 27 36 63 81 79 100 137 159 108 368 -64 456 -38 19 -62 24 -120 24 -40
   -1 -86 -7 -103 -14z m150 -115 c84 -39 127 -120 105 -201 -10 -36 -85 -150
   -109 -165 -9 -5 -197 135 -269 200 -11 10 -5 22 30 66 88 112 156 140 243 100z"
            />
            <path
                d="M7000 6849 c-183 -149 -220 -181 -220 -188 0 -10 61 -81 70 -81 5 0
   32 21 62 46 126 108 180 126 236 79 37 -31 49 -31 87 0 42 35 29 56 -59 91
   -29 11 -36 18 -27 27 6 6 11 17 11 23 0 17 -49 74 -63 74 -7 -1 -50 -32 -97
   -71z"
            />
            <path
                d="M7085 6285 c-44 -43 -23 -109 40 -121 72 -14 116 80 59 125 -35 28
   -69 26 -99 -4z"
            />
            <path
                d="M3113 6272 c-17 -12 -33 -50 -33 -81 0 -28 3 -30 58 -41 31 -7 72
   -18 91 -26 l34 -15 -31 -32 c-40 -41 -52 -75 -52 -145 0 -59 15 -93 59 -139
   41 -43 81 -57 166 -58 73 0 83 3 118 29 21 16 50 49 64 73 22 38 25 52 21 113
   -3 59 -1 70 12 70 11 0 22 18 33 52 9 29 15 53 14 53 -1 1 -29 9 -62 17 -33 9
   -87 23 -120 33 -33 10 -82 23 -110 30 -27 6 -57 14 -65 18 -8 4 -33 11 -55 16
   -22 5 -61 16 -86 24 -25 8 -50 12 -56 9z m344 -216 c58 -27 70 -54 59 -130 -6
   -36 -13 -46 -45 -64 -48 -27 -71 -27 -120 -3 -77 40 -94 114 -41 175 27 30 44
   39 85 45 6 0 33 -10 62 -23z"
            />
            <path
                d="M7612 5969 c-35 -4 -78 -12 -95 -18 -18 -5 -66 -12 -107 -15 -68 -6
   -200 -26 -208 -32 -2 -1 2 -28 10 -59 l13 -56 72 7 c72 6 73 6 83 -20 23 -62
   14 -88 -56 -156 l-66 -65 5 -52 c2 -29 7 -56 10 -59 4 -4 40 23 80 59 l74 66
   28 -29 c42 -44 112 -64 176 -51 65 14 104 42 130 93 29 56 34 129 15 218 -9
   41 -16 89 -16 105 0 17 -3 40 -6 53 -7 25 -27 26 -142 11z m67 -193 c15 -90 1
   -135 -49 -161 -69 -36 -126 8 -146 112 -18 90 -17 91 9 99 19 6 99 18 158 23
   13 1 19 -15 28 -73z"
            />
            <path
                d="M3196 5637 c-48 -27 -86 -94 -86 -151 0 -23 11 -65 25 -93 22 -49 23
   -53 6 -53 -11 0 -22 -7 -25 -16 -9 -23 -7 -82 2 -88 5 -3 101 -6 213 -6 l204
   -2 0 54 0 53 -110 7 c-157 10 -173 14 -195 51 -11 18 -20 43 -20 57 0 25 23
   68 44 82 6 4 73 8 149 8 l137 0 0 60 0 60 -152 0 c-140 0 -156 -2 -192 -23z"
            />
            <path
                d="M7393 5400 c-50 -11 -100 -56 -130 -113 -23 -43 -28 -65 -28 -127 0
   -115 38 -158 96 -111 20 16 22 23 13 38 -6 10 -15 33 -18 50 -12 55 43 153 87
   153 22 0 22 -13 -4 -213 -16 -116 -13 -121 70 -113 103 9 176 84 187 191 9 86
   -8 138 -62 190 -57 56 -129 75 -211 55z m142 -126 c8 -4 22 -19 30 -35 30 -57
   10 -134 -40 -157 -45 -21 -47 -17 -40 71 10 130 12 135 50 121z"
            />
            <path
                d="M3281 5127 c-25 -12 -59 -39 -75 -60 -29 -37 -31 -44 -31 -126 0 -79
   3 -92 28 -130 41 -62 108 -101 172 -101 68 0 112 16 154 54 68 63 87 154 54
   261 -16 50 -70 125 -91 125 -4 0 -18 -16 -32 -36 -21 -31 -22 -38 -9 -48 25
   -19 59 -86 59 -117 0 -37 -24 -85 -48 -98 -16 -9 -21 -3 -34 42 -9 29 -27 98
   -39 154 -27 117 -30 119 -108 80z m49 -99 c0 -2 9 -46 20 -98 24 -117 25 -110
   -4 -110 -62 0 -110 88 -82 154 8 19 22 39 33 45 17 10 33 14 33 9z"
            />
            <path
                d="M7224 4931 c-56 -34 -91 -141 -69 -209 5 -17 2 -22 -13 -22 -26 0
   -42 -21 -49 -63 -5 -30 -2 -36 18 -42 13 -4 67 -23 119 -42 83 -30 104 -34
   167 -31 54 2 77 8 93 23 34 31 66 103 79 179 10 58 10 71 -4 92 -18 28 -16 27
   -49 14 -22 -8 -26 -16 -26 -49 0 -49 -32 -126 -59 -140 -11 -6 -31 -11 -45
   -11 -30 0 -34 22 -11 66 19 37 29 122 20 174 -5 32 -14 46 -39 61 -40 24 -92
   24 -132 0z m84 -107 c14 -9 22 -25 21 -42 0 -35 -33 -115 -48 -120 -16 -5 -51
   27 -62 56 -13 34 6 97 33 110 31 14 30 14 56 -4z"
            />
            <path
                d="M3441 4643 l-23 -19 41 -86 c22 -47 45 -89 50 -92 16 -10 71 22 71
   42 0 9 -17 51 -38 92 -41 82 -62 95 -101 63z"
            />
            <path
                d="M3726 4488 c-20 -28 -20 -52 -1 -68 22 -18 18 -58 -8 -83 -28 -26
   -141 -97 -154 -97 -4 1 -20 19 -36 41 l-27 39 -30 -22 c-36 -26 -36 -31 -9
   -75 20 -32 20 -35 4 -53 -10 -11 -26 -22 -36 -25 -26 -8 -24 -26 8 -74 l26
   -41 45 26 44 26 22 -26 21 -26 30 24 c27 22 28 26 17 51 -11 24 -10 29 10 46
   13 10 46 32 73 48 28 16 68 48 89 71 35 39 38 46 34 90 -4 34 -15 63 -40 97
   -40 56 -60 63 -82 31z"
            />
            <path
                d="M7032 4473 c-40 -19 -98 -85 -119 -133 -8 -19 -15 -57 -15 -83 0 -57
   18 -83 51 -72 30 9 61 44 54 61 -10 27 8 84 35 109 39 36 81 41 131 15 98 -49
   89 -192 -13 -218 -28 -8 -31 -12 -34 -55 l-3 -47 40 0 c79 0 173 109 188 218
   10 72 -35 157 -105 199 -46 29 -158 32 -210 6z"
            />
            <path
                d="M3844 4147 c-99 -101 -123 -134 -135 -184 -19 -86 51 -177 159 -208
   17 -5 21 -11 16 -27 -7 -23 39 -78 66 -78 17 0 290 272 290 288 0 4 -17 25
   -38 45 l-38 37 -79 -81 c-44 -44 -93 -87 -109 -96 -55 -29 -131 4 -141 61 -9
   46 9 77 99 166 42 41 76 82 76 91 0 14 -20 36 -61 67 -13 9 -30 -4 -105 -81z"
            />
            <path
                d="M6740 4123 c-42 -28 -90 -87 -90 -109 0 -41 49 -45 92 -9 16 14 36
   25 44 25 8 0 44 -27 79 -60 35 -33 69 -60 75 -60 20 0 9 -37 -20 -65 -37 -36
   -37 -46 0 -73 l29 -22 36 36 37 36 31 -28 c17 -16 34 -32 37 -36 3 -4 25 11
   48 35 l42 43 -35 34 c-19 19 -35 37 -35 40 0 3 9 16 19 27 19 20 19 21 -10 49
   -25 24 -32 26 -47 16 -36 -26 -43 -23 -113 44 -38 38 -80 74 -92 81 -32 18
   -99 16 -127 -4z"
            />
            <path
                d="M6402 4039 c-98 -49 -117 -140 -50 -245 17 -27 45 -71 63 -99 17 -27
   54 -84 81 -125 27 -41 52 -83 56 -92 4 -10 10 -18 13 -18 14 0 61 29 78 48 18
   19 16 23 -64 148 -45 71 -95 149 -111 173 -16 25 -32 59 -35 77 -4 26 0 36 26
   60 31 27 37 47 25 78 -8 22 -31 20 -82 -5z"
            />
            <path
                d="M6545 3954 c-29 -31 -31 -51 -9 -82 24 -35 59 -45 93 -27 47 24 56
   78 18 113 -32 30 -72 28 -102 -4z"
            />
            <path
                d="M4239 3816 c-65 -44 -109 -120 -109 -187 0 -74 35 -133 114 -190 36
   -27 45 -29 134 -29 l96 0 51 53 c53 54 65 84 65 158 0 53 -13 82 -62 135 -56
   62 -106 84 -188 84 -53 0 -72 -5 -101 -24z m187 -92 c29 -20 54 -63 54 -96 0
   -33 -41 -101 -70 -115 -57 -29 -132 -4 -155 51 -20 48 -9 99 32 141 28 28 41
   35 74 35 22 0 51 -7 65 -16z"
            />
            <path
                d="M6206 3739 c-59 -14 -150 -68 -174 -103 -34 -49 -30 -119 7 -157 34
   -34 77 -38 155 -14 57 18 112 19 121 4 24 -38 -39 -87 -125 -98 -45 -6 -45 -6
   -48 -48 l-3 -43 40 0 c62 0 150 39 203 90 41 39 48 52 48 84 0 111 -91 150
   -234 100 -53 -19 -88 -9 -84 24 4 35 49 60 135 76 60 11 69 15 78 40 17 49
   -28 66 -119 45z"
            />
            <path
                d="M4802 3632 c-5 -9 -17 -44 -27 -77 -29 -99 -47 -135 -79 -162 -26
   -22 -36 -24 -78 -19 -52 7 -56 4 -74 -71 l-7 -26 77 5 c69 5 76 3 76 -14 0
   -10 8 -21 18 -24 9 -3 29 -12 44 -20 27 -14 28 -14 41 18 8 18 26 74 42 123
   15 50 31 99 36 110 5 11 17 46 28 78 22 65 22 65 -52 85 -31 9 -38 8 -45 -6z"
            />
            <path
                d="M5652 3573 c-19 -8 -43 -60 -35 -80 13 -36 36 -53 73 -53 45 0 70 24
   70 68 0 54 -54 87 -108 65z"
            />
            <path
                d="M5236 3508 c-4 -29 -9 -74 -12 -100 -3 -27 -11 -48 -17 -48 -29 1
   -201 21 -223 26 -23 6 -24 4 -24 -45 0 -28 1 -51 3 -52 1 0 54 -6 117 -12
   l115 -12 0 -72 c0 -39 -3 -75 -7 -79 -4 -4 -69 1 -145 10 -152 19 -153 19
   -153 -46 l0 -36 58 -5 c31 -2 116 -12 187 -21 72 -8 137 -13 146 -11 13 5 20
   34 33 143 9 75 23 183 31 238 22 152 23 150 -29 163 -71 18 -73 17 -80 -41z"
            />
            <path
                d="M6642 3417 c-24 -25 -28 -57 -12 -88 15 -28 82 -26 110 3 24 26 26
   56 4 86 -21 30 -73 30 -102 -1z"
            />
        </g>
    </svg>
);
