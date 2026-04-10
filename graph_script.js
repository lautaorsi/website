
const ICONS = {
  
  skills: `
    <svg xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 128 128"><path fill="currentColor" d="M124.742 58.378L69.625 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.685 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314a9.66 9.66 0 0 1 2.293 9.993L87.42 55.529c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.68 9.68 0 0 1-2.105-10.521L68.578 47.933l-.002 34.341a9.7 9.7 0 0 1 2.559 1.828c3.779 3.777 3.779 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-4.088-9.905-.311-13.683c.934-.933 1.855-1.638 2.855-2.11V47.333c-1-.472-1.92-1.172-2.856-2.111c-2.861-2.86-3.396-7.06-1.928-10.576L40.983 20.333L3.229 58.123c-3.175 3.177-3.155 8.325.02 11.5l55.126 55.114c3.173 3.174 8.325 3.174 11.503 0l54.86-54.858c3.175-3.176 3.178-8.327.004-11.501"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21.81 10.25c-.06-.04-.56-.43-1.64-.43c-.28 0-.56.03-.84.08c-.21-1.4-1.38-2.11-1.43-2.14l-.29-.17l-.18.27c-.24.36-.43.77-.51 1.19c-.2.8-.08 1.56.33 2.21c-.49.28-1.29.35-1.46.35H2.62c-.34 0-.62.28-.62.63c0 1.15.18 2.3.58 3.38c.45 1.19 1.13 2.07 2 2.61c.98.6 2.59.94 4.42.94c.79 0 1.61-.07 2.42-.22c1.12-.2 2.2-.59 3.19-1.16A8.3 8.3 0 0 0 16.78 16c1.05-1.17 1.67-2.5 2.12-3.65h.19c1.14 0 1.85-.46 2.24-.85c.26-.24.45-.53.59-.87l.08-.24zm-17.96.99h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H3.85c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.43 0h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H6.28c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.47 0h1.75c.1 0 .17-.07.17-.16V9.5c0-.08-.06-.16-.17-.16H8.75c-.08 0-.15.07-.15.16v1.58c0 .09.06.16.15.16m2.44 0h1.77c.08 0 .15-.07.15-.16V9.5c0-.08-.06-.16-.15-.16h-1.77c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16M6.28 9h1.76c.08 0 .16-.09.16-.18V7.25c0-.09-.07-.16-.16-.16H6.28c-.09 0-.16.06-.16.16v1.57c.01.09.07.18.16.18m2.47 0h1.75c.1 0 .17-.09.17-.18V7.25c0-.09-.06-.16-.17-.16H8.75c-.08 0-.15.06-.15.16v1.57c0 .09.06.18.15.18m2.44 0h1.77c.08 0 .15-.09.15-.18V7.25c0-.09-.07-.16-.15-.16h-1.77c-.08 0-.15.06-.15.16v1.57c0 .09.07.18.15.18m0-2.28h1.77c.08 0 .15-.07.15-.16V5c0-.1-.07-.17-.15-.17h-1.77c-.08 0-.15.06-.15.17v1.56c0 .08.07.16.15.16m2.46 4.52h1.76c.09 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16h-1.76c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 128 128"><path fill="currentColor" d="M63.443 0c-1.782 0-3.564.39-4.916 1.172L11.594 28.27C8.89 29.828 6.68 33.66 6.68 36.78v54.197c0 1.562.55 3.298 1.441 4.841l-.002.002c.89 1.543 2.123 2.89 3.475 3.672l46.931 27.094c2.703 1.562 7.13 1.562 9.832 0h.002l46.934-27.094c1.352-.78 2.582-2.129 3.473-3.672c.89-1.543 1.441-3.28 1.441-4.843V36.779c0-1.557-.55-3.295-1.441-4.838v-.002c-.891-1.545-2.121-2.893-3.473-3.67L68.359 1.173C67.008.39 65.226 0 63.443 0m.002 26.033c13.465 0 26.02 7.246 32.77 18.91l-16.38 9.479c-3.372-5.836-9.66-9.467-16.39-9.467c-10.432 0-18.922 8.49-18.922 18.924S53.013 82.8 63.445 82.8c6.735 0 13.015-3.625 16.395-9.465l16.375 9.477c-6.746 11.662-19.305 18.91-32.77 18.91c-20.867 0-37.843-16.977-37.843-37.844s16.976-37.844 37.843-37.844v-.002zM92.881 57.57h4.201v4.207h4.203v4.203h-4.203v4.207h-4.201V65.98h-4.207v-4.203h4.207zm15.765 0h4.208v4.207h4.203v4.203h-4.203v4.207h-4.208V65.98h-4.205v-4.203h4.205z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 24 24"><g fill="none"><g fill="currentColor" clip-path="url(#SVGXv8lpc2Y)"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969s3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.913 0M8.708 1.85c.578 0 1.046.47 1.046 1.052c0 .581-.468 1.051-1.046 1.051s-1.046-.47-1.046-1.051c0-.582.467-1.052 1.046-1.052"/><path d="M12.087 24c6.092 0 5.712-2.656 5.712-2.656l-.007-2.752h-5.814v-.826h8.123s3.9.445 3.9-5.735s-3.404-5.96-3.404-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.452s-3.24-.052-3.24 3.148v5.292S5.72 24 12.087 24m3.206-1.85c-.579 0-1.046-.47-1.046-1.052c0-.581.467-1.051 1.046-1.051c.578 0 1.046.47 1.046 1.051c0 .582-.468 1.052-1.046 1.052"/></g><defs><clipPath id="SVGXv8lpc2Y"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
    `,
  about:`
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8.125 21.213q-1.825-.788-3.187-2.15t-2.15-3.188T2 11.988t.788-3.875t2.15-3.175t3.187-2.15T12.013 2t3.875.788t3.175 2.15t2.15 3.175t.787 3.875t-.787 3.887t-2.15 3.188t-3.175 2.15t-3.875.787t-3.888-.787M12 19.95q.65-.9 1.125-1.875T13.9 16h-3.8q.3 1.1.775 2.075T12 19.95m-2.6-.4q-.45-.825-.787-1.713T8.05 16H5.1q.725 1.25 1.813 2.175T9.4 19.55m5.2 0q1.4-.45 2.488-1.375T18.9 16h-2.95q-.225.95-.562 1.838T14.6 19.55M4.25 14h3.4q-.075-.5-.112-.987T7.5 12t.038-1.012T7.65 10h-3.4q-.125.5-.187.988T4 12t.063 1.013t.187.987m5.4 0h4.7q.075-.5.113-.987T14.5 12t-.038-1.012T14.35 10h-4.7q-.075.5-.112.988T9.5 12t.038 1.013t.112.987m6.7 0h3.4q.125-.5.188-.987T20 12t-.062-1.012T19.75 10h-3.4q.075.5.113.988T16.5 12t-.038 1.013t-.112.987m-.4-6h2.95q-.725-1.25-1.812-2.175T14.6 4.45q.45.825.788 1.713T15.95 8M10.1 8h3.8q-.3-1.1-.775-2.075T12 4.05q-.65.9-1.125 1.875T10.1 8m-5 0h2.95q.225-.95.563-1.838T9.4 4.45Q8 4.9 6.912 5.825T5.1 8"/></svg>
  `,
  projects:`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M14.942 12.57L10 4.335V1h.5c.275 0 .5-.225.5-.5s-.225-.5-.5-.5h-5c-.275 0-.5.225-.5.5s.225.5.5.5H6v3.335L1.058 12.57C-.074 14.456.8 16 3 16h10c2.2 0 3.074-1.543 1.942-3.43M3.766 10L7 4.61V1h2v3.61L12.234 10z"/></svg>`
  ,
  academic:`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="M7.5 1L0 4.5l2 .9v1.7c-.6.2-1 .8-1 1.4s.4 1.2 1 1.4v.1l-.9 2.1C.8 13 1 14 2.5 14s1.7-1 1.4-1.9L3 10c.6-.3 1-.8 1-1.5s-.4-1.2-1-1.4V5.9L7.5 8L15 4.5zm4.4 6.5l-4.5 2L5 8.4v.1c0 .7-.3 1.3-.8 1.8l.6 1.4v.1c.1.4.2.8.1 1.2c.7.3 1.5.5 2.5.5c3.3 0 4.5-2 4.5-3z"/></svg>`,
  center:`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="M2.5 6.5V6H2v.5zm4 0V6H6v.5zm0 4H6v.5h.5zm7-7h.5v-.207l-.146-.147zm-3-3l.354-.354L10.707 0H10.5zM2.5 7h1V6h-1zm.5 4V8.5H2V11zm0-2.5v-2H2v2zm.5-.5h-1v1h1zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 5 7.5zM3.5 7a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 3.5 6zM6 6.5v4h1v-4zm.5 4.5h1v-1h-1zM9 9.5v-2H8v2zM7.5 6h-1v1h1zM9 7.5A1.5 1.5 0 0 0 7.5 6v1a.5.5 0 0 1 .5.5zM7.5 11A1.5 1.5 0 0 0 9 9.5H8a.5.5 0 0 1-.5.5zM10 6v5h1V6zm.5 1H13V6h-2.5zm0 2H12V8h-1.5zM2 5V1.5H1V5zm11-1.5V5h1V3.5zM2.5 1h8V0h-8zm7.646-.146l3 3l.708-.708l-3-3zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM1 12v1.5h1V12zm1.5 3h10v-1h-10zM14 13.5V12h-1v1.5zM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5z"/></svg>`,
  courses:` 
    <svg xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 32 32"><path fill="currentColor" d="M0 21.527h6.224v.889H0zm0-1.71h6.224v.891H0zm1.771-1.708h2.672v.896H1.771zm0-1.702h2.672v.896H1.771zm0-1.71h2.672v.896H1.771zm0-1.708h2.672v.896H1.771zM0 11.287h6.224v.896H0zm0-1.703h6.224v.889H0zm7.109 11.124h9.568c.161-.276.287-.577.359-.891H7.109zm8.823-4.301H8.891v.896h7.792a3.6 3.6 0 0 0-.745-.896zm-7.047-1.71v.896h7.047c.303-.249.547-.552.751-.896zm7.792-3.41H7.109v.896h9.921a3.6 3.6 0 0 0-.353-.896M13.74 9.584H7.109v.889h8.912a3.37 3.37 0 0 0-2.281-.889m-4.855 3.405h2.667v.896H8.885zm5.339.896h2.787a3.4 3.4 0 0 0 .12-.896h-2.907zm-5.339 4.224h2.667v.896H8.885zm5.339 0v.896h2.907c0-.308-.043-.609-.12-.896zm-7.115 4.303l6.625.004c.891 0 1.692-.337 2.292-.889H7.109zm10.672-.885h4.437v.889h-4.437zm0-1.71h4.437v.891h-4.437zm1.771-1.708h2.667v.896h-2.667zm0-1.702h2.667v.896h-2.667zm3.907-5.12h-5.677v.896h5.984zm-.59-1.703h-5.088v.889h5.396zm4.683 11.943H32v.889h-4.448zm0-1.71H32v.891h-4.448zm0-1.708h2.667v.896h-2.667zm0-1.702h2.667v.896h-2.667zm0-.814h2.667v-.896H25.14l-.255.724l-.249-.724h-5.084v.896h2.667v-.823l.287.823h4.765l.281-.823zm2.667-2.604H25.73l-.308.896h4.797zm-3.307-3.405l-.308.889H32v-.889zm-2.027 12.828l.308-.885h-.615zm-.588-1.704h1.181l.319-.891h-1.813zm-.6-1.703h2.381l.312-.896h-3.005zm-.593-1.702h3.573l.301-.896h-4.181zm-3.552-3.418h4.803l-.308-.896h-4.495zm6.464-1.702H32v-.896h-5.683z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.66 10.2c.096 0 .179.067.195.161c.094.526.145 1.092.145 1.639a8.97 8.97 0 0 1-2.293 6.001a.197.197 0 0 1-.274.018l-2.445-2.07a.206.206 0 0 1-.016-.297a5.4 5.4 0 0 0 1.114-1.852H12.2a.2.2 0 0 1-.2-.2v-3.2c0-.11.09-.2.2-.2zm-6.187 6.6a.21.21 0 0 1 .226.024l2.568 2.173a.196.196 0 0 1-.01.309A8.96 8.96 0 0 1 12 21a9 9 0 0 1-7.548-4.097a.197.197 0 0 1 .046-.263l2.545-1.962a.207.207 0 0 1 .303.062a5.4 5.4 0 0 0 7.127 2.06M6.68 12.926a.2.2 0 0 1-.076.197L3.869 15.23a.196.196 0 0 1-.304-.084A9 9 0 0 1 3 12c0-1.152.217-2.254.612-3.267a.196.196 0 0 1 .299-.085l2.732 2.004c.065.047.095.13.078.208a5.4 5.4 0 0 0-.042 2.066m.468-3.765c.096.07.231.042.295-.058A5.4 5.4 0 0 1 12 6.6a5.37 5.37 0 0 1 3.44 1.245a.205.205 0 0 0 .276-.01l2.266-2.267a.197.197 0 0 0-.007-.286A8.95 8.95 0 0 0 12 3a8.99 8.99 0 0 0-7.484 4a.197.197 0 0 0 .049.267z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.7 17.6c-.1-.2-.2-.4-.2-.6c0-.4-.2-.7-.5-1c-.1-.1-.3-.2-.4-.2c.6-1.8-.3-3.6-1.3-4.9c-.8-1.2-2-2.1-1.9-3.7c0-1.9.2-5.4-3.3-5.1c-3.6.2-2.6 3.9-2.7 5.2c0 1.1-.5 2.2-1.3 3.1c-.2.2-.4.5-.5.7c-1 1.2-1.5 2.8-1.5 4.3c-.2.2-.4.4-.5.6c-.1.1-.2.2-.2.3c-.1.1-.3.2-.5.3c-.4.1-.7.3-.9.7c-.1.3-.2.7-.1 1.1c.1.2.1.4 0 .7c-.2.4-.2.9 0 1.4c.3.4.8.5 1.5.6c.5 0 1.1.2 1.6.4c.5.3 1.1.5 1.7.5c.3 0 .7-.1 1-.2c.3-.2.5-.4.6-.7c.4 0 1-.2 1.7-.2c.6 0 1.2.2 2 .1c0 .1 0 .2.1.3c.2.5.7.9 1.3 1h.2c.8-.1 1.6-.5 2.1-1.1c.4-.4.9-.7 1.4-.9c.6-.3 1-.5 1.1-1c.1-.7-.1-1.1-.5-1.7M12.8 4.8c.6.1 1.1.6 1 1.2q0 .45-.3.9h-.1c-.2-.1-.3-.1-.4-.2c.1-.1.1-.3.2-.5c0-.4-.2-.7-.4-.7c-.3 0-.5.3-.5.7v.1c-.1-.1-.3-.1-.4-.2V6c-.1-.5.3-1.1.9-1.2m-.3 2c.1.1.3.2.4.2s.3.1.4.2c.2.1.4.2.4.5s-.3.6-.9.8c-.2.1-.3.1-.4.2c-.3.2-.6.3-1 .3c-.3 0-.6-.2-.8-.4c-.1-.1-.2-.2-.4-.3c-.1-.1-.3-.3-.4-.6c0-.1.1-.2.2-.3c.3-.2.4-.3.5-.4l.1-.1c.2-.3.6-.5 1-.5c.3.1.6.2.9.4M10.4 5c.4 0 .7.4.8 1.1v.2c-.1 0-.3.1-.4.2v-.2c0-.3-.2-.6-.4-.5c-.2 0-.3.3-.3.6c0 .2.1.3.2.4c0 0-.1.1-.2.1c-.2-.2-.4-.5-.4-.8c0-.6.3-1.1.7-1.1m-1 16.1c-.7.3-1.6.2-2.2-.2c-.6-.3-1.1-.4-1.8-.4c-.5-.1-1-.1-1.1-.3s-.1-.5.1-1q.15-.45 0-.9c-.1-.3-.1-.5 0-.8s.3-.4.6-.5s.5-.2.7-.4c.1-.1.2-.2.3-.4c.3-.4.5-.6.8-.6c.6.1 1.1 1 1.5 1.9c.2.3.4.7.7 1c.4.5.9 1.2.9 1.6c0 .5-.2.8-.5 1m4.9-2.2c0 .1 0 .1-.1.2c-1.2.9-2.8 1-4.1.3l-.6-.9c.9-.1.7-1.3-1.2-2.5c-2-1.3-.6-3.7.1-4.8c.1-.1.1 0-.3.8c-.3.6-.9 2.1-.1 3.2c0-.8.2-1.6.5-2.4c.7-1.3 1.2-2.8 1.5-4.3c.1.1.1.1.2.1c.1.1.2.2.3.2c.2.3.6.4.9.4h.1c.4 0 .8-.1 1.1-.4c.1-.1.2-.2.4-.2q.45-.15.9-.6c.4 1.3.8 2.5 1.4 3.6c.4.8.7 1.6.9 2.5c.3 0 .7.1 1 .3c.8.4 1.1.7 1 1.2H18c0-.3-.2-.6-.9-.9s-1.3-.3-1.5.4c-.1 0-.2.1-.3.1c-.8.4-.8 1.5-.9 2.6c.1.4 0 .7-.1 1.1m4.6.6c-.6.2-1.1.6-1.5 1.1c-.4.6-1.1 1-1.9.9c-.4 0-.8-.3-.9-.7c-.1-.6-.1-1.2.2-1.8c.1-.4.2-.7.3-1.1c.1-1.2.1-1.9.6-2.2c0 .5.3.8.7 1c.5 0 1-.1 1.4-.5h.2c.3 0 .5 0 .7.2s.3.5.3.7c0 .3.2.6.3.9c.5.5.5.8.5.9c-.1.2-.5.4-.9.6m-9-12c-.1 0-.1 0-.1.1c0 0 0 .1.1.1s.1.1.1.1c.3.4.8.6 1.4.7c.5-.1 1-.2 1.5-.6l.6-.3c.1 0 .1-.1.1-.1c0-.1 0-.1-.1-.1c-.2.1-.5.2-.7.3c-.4.3-.9.5-1.4.5s-.9-.3-1.2-.6c-.1 0-.2-.1-.3-.1"/></svg>
    `,
  
    contacto:`
    <svg xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 32 32"><path fill="currentColor" d="M32 6v20c0 1.135-.865 2-2 2h-2V9.849l-12 8.62l-12-8.62V28H2c-1.135 0-2-.865-2-2V6c0-.568.214-1.068.573-1.422A1.97 1.97 0 0 1 2 4h.667L16 13.667L29.333 4H30c.568 0 1.068.214 1.427.578c.359.354.573.854.573 1.422"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 .396c-8.839 0-16 7.167-16 16c0 7.073 4.584 13.068 10.937 15.183c.803.151 1.093-.344 1.093-.772c0-.38-.009-1.385-.015-2.719c-4.453.964-5.391-2.151-5.391-2.151c-.729-1.844-1.781-2.339-1.781-2.339c-1.448-.989.115-.968.115-.968c1.604.109 2.448 1.645 2.448 1.645c1.427 2.448 3.744 1.74 4.661 1.328c.14-1.031.557-1.74 1.011-2.135c-3.552-.401-7.287-1.776-7.287-7.907c0-1.751.62-3.177 1.645-4.297c-.177-.401-.719-2.031.141-4.235c0 0 1.339-.427 4.4 1.641a15.4 15.4 0 0 1 4-.541c1.36.009 2.719.187 4 .541c3.043-2.068 4.381-1.641 4.381-1.641c.859 2.204.317 3.833.161 4.235c1.015 1.12 1.635 2.547 1.635 4.297c0 6.145-3.74 7.5-7.296 7.891c.556.479 1.077 1.464 1.077 2.959c0 2.14-.02 3.864-.02 4.385c0 .416.28.916 1.104.755c6.4-2.093 10.979-8.093 10.979-15.156c0-8.833-7.161-16-16-16z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 32 32"><path fill="currentColor" d="M27.26 27.271h-4.733v-7.427c0-1.771-.037-4.047-2.475-4.047c-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739V11.999h4.552v2.083h.061c.636-1.203 2.183-2.468 4.491-2.468c4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912a2.75 2.75 0 0 1-2.751-2.756a2.753 2.753 0 1 1 2.751 2.756m2.374 17.359H4.74V12h4.749zM29.636 0H2.36C1.057 0 0 1.031 0 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307V2.307C32 1.031 30.932 0 29.631 0z"/></svg>
    `
};

const CONTENT = {
  about: { title:'Sobre Mi', cards:[
    { title:'Perfil', meta:'Introduccion', body:"Soy un estudiante de 4to año en la carrera de Ciencias de la Computación, UBA. Estoy interesado en el desarrollo backend, bases de datos y ciberseguridad. A lo largo de mis estudios fui aprendiendo múltiples soft-skills relacionadas a las buenas prácticas de desarrollo de código y teorias relacionadas con el análisis de complejidades de algoritmos, estructuras de datos y comportamientos en bajo nivel de los programas y computadoras.", tags:['CS','Backend'] },
    { title:'Idiomas', meta:'Comunicacion', body:"Español Nativo, Ingles Avanzado (C2).", tags:[] },
  ]},
  academic: { title:'Academic', cards:[
    { title:'Licenciatura en Ciencias de la Computacion', meta:'Universidad de Buenos Aires · 2022–2027', body:'Actualmente en 4to año con 11/19 materias regularizadas.', tags:['UBA','Analisis 1','Algebra Lineal Computacional','Sistemas Operativos','Lenguajes Formales, Automatas y Computabilidad','Algebra 1','Introduccion a la Programacion','Algoritmos y Estructuras de Datos','Tecnicas de Diseño de Algoritmos','Sistemas Digitales','Paradigmas de la Programacion','Ingenieria del Software','Arquitectura y Organizacion de Computadores'] },
    { title:'Bachiller en Ciencias de la Computacion', meta:'UBA · Completado', body:'Titulo intermedio de la Licenciatura en Ciencias de la Computacion. Promedio 7.25.', tags:['UBA','Algebra 1','Introduccion a la Programacion','Algoritmos y Estructuras de Datos','Tecnicas de Diseño de Algoritmos','Sistemas Digitales','Paradigmas de la Programacion','Ingenieria del Software','Arquitectura y Organizacion de Computadores'] },
    { title:'Secundaria', meta:'Carlos Pellegrini · 2017–2022', body:'Promedio 7.50. Especialización en Economía.', tags:[] },
  ]},
  projects: { title:'Proyectos', cards:[
    { title:'Pet Finder App', meta:'Mobile Development', body:'App dinamica para encontrar mascotas perdidas utilizando sistemas de autenticación de solicitudes (JWT), creación de cuentas y comunicación con un servidor y base de datos (MongoDB), usando Docker-Compose para aislar el entorno de desarrollo..', tags:['React Native','Express','MongoDB','Docker','JWT'], link:'https://github.com/lautaorsi/pet-finder', linkText:'Ver Repositorio' },
    { title:'Videojuego Online Geografía', meta:'Multiplayer', body:'Juego online de geografía, empleando distintas API`s, tecnicas anti-exploits y mantenimiento del servidor.', tags:['Node.js','Socket.io','Leaflet','Javascript'], link:'https://github.com/lautaorsi/pet-finder' ,linkText:'Ver Repositorio'},
    { title:'WhatsApp Scraper', meta:'Data Analysis', body:'Pequeño proyecto que scrappea chats entre dos o mas usuarios para generar estadisticas y datos relevantes de las conversaciónes.', tags:['Python','Regex','MatPlotLib'], link:'https://github.com/lautaorsi/pet-finder' ,linkText:'Ver Repositorio'},
  ]},
  courses: { title:'Cursos', cards:[
    { title: 'Machine Learning with Python', meta:'Machine Learning', body:'Curso aplicado de Machine Learning de IBM (en curso)', tags:['Python','Machine Learning'], linkText:'Ir al repositorio', link:'https://github.com/lautaorsi/AI-IBM-COURSE'},
    {title:'Google Cybersecurity Specialization', meta:'Ciberseguridad', body:'Curso de ciberseguridad teorico y practico', tags:['Linux','SQL','Python','Windows'], linkText:'Certificado', link:'https://coursera.org/share/a733688561956f4471289add8737c8f0'},
    { title:'Linux for Developers', meta:'General', body:'Curso inicial de Linux.', tags:['Linux'], linkText:"Certificado", link:"https://coursera.org/share/593ba8abb4b3be969cb2f59fd431daeb" },
    { title:'Linux Server Management and Security', meta:'Ciberseguridad', body:'Curso de seguridad en Linux.', tags:['OS','SQL','Databases'],linkText:"Certificado", link:"https://coursera.org/share/6770bf6fd701df4d06230ef2fdd019a2" },
    { title:'Introduction to Databases', meta:'General', body:'Curso inicial de Bases de Datos.', tags:['SQL'], linkText:"Certificado", link:"https://coursera.org/share/934b732b8048ae9f5b41a90240926343" },
  ]},
  skills: { title:'Habilidades', cards:[
    { title:'Lenguajes', meta:'Programacion', body:'', tags:['C++','Python','Assembly','JavaScript','Java','C'] },
    { title:'Frameworks & Tools', meta:'Ecosistema', body:'', tags:['Docker','Git','Node.js','SQL','React Native','Expo Go','MongoDB','Django'] },
  ]},
  contact: { title:'Contacto & Links', cards:[
    { title:'Email', meta:'Contacto', body:'lautaromorsi [at] gmail com', tags:['Contact'] },
    { title:'Github', meta:'Repositorios', body:'github.com/lautaorsi', tags:['Personal'], link:'https://www.github.com/lautaorsi', linkText:"Ir a Github" },
    { title:'Linkedin', meta:'Social', body:'linkedin.com/in/lautaro-orsi ', tags:['Profesional'], link:'https://linkedin.com/in/lautaro-orsi', linkText:'Ver Perfil' },
  ]},
};






const NODES = [
  { id:'center',   label:'Portfolio', icon:ICONS.center, cx:0.50, cy:0.50, isCenter:true },
  { id:'about',    label:'Sobre Mi',  icon:ICONS.about, cx:0.22, cy:0.28 },
  { id:'academic', label:'Académico', icon:ICONS.academic, cx:0.76, cy:0.24 },
  { id:'projects', label:'Proyectos', icon:ICONS.projects, cx:0.82, cy:0.62 },
  { id:'skills',   label:'Skills',    icon: ICONS.skills, cx:0.18, cy:0.68 },
  { id:'contact',  label:'Contacto',  icon:ICONS.contacto, cx:0.46, cy:0.84 },
  { id:'courses',  label:'Cursos',    icon: ICONS.courses, cx:0.45, cy:0.20 },
];

const EDGES = [
  ['center','about'], ['center','academic'], ['center','projects'],
  ['center','skills'], ['center','contact'],['center','courses']
];



// -------------------------------------------------------
// BACKGROUND 
// -------------------------------------------------------
const bgCanvas = document.getElementById('bg-canvas');
const bgCtx = bgCanvas.getContext('2d');
let bW, bH, bgDots = [];

function initBg() {
  bW = bgCanvas.width = window.innerWidth;
  bH = bgCanvas.height = window.innerHeight;
  bgDots = Array.from({ length: 60 }, () => ({
    x: Math.random() * bW, y: Math.random() * bH,
    vx: (Math.random() - 0.5) * 0.2,
    vy: (Math.random() - 0.5) * 0.2,
    r: Math.random() * 1.5 + 0.5
  }));
}

function drawBg() {
  bgCtx.clearRect(0, 0, bW, bH);
  bgDots.forEach(n => {
    n.x += n.vx; n.y += n.vy;
    if (n.x < 0 || n.x > bW) n.vx *= -1;
    if (n.y < 0 || n.y > bH) n.vy *= -1;
    bgCtx.beginPath();
    bgCtx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    // Color dorado/beige para matchar el theme
    bgCtx.fillStyle = 'rgba(201,169,110,0.18)';
    bgCtx.fill();
  });
  requestAnimationFrame(drawBg);
}

// -------------------------------------------------------
// GRAPH
// -------------------------------------------------------
const graphEl = document.getElementById('graph');
const linesEl = document.getElementById('lines');

function renderGraph() {
  const W = window.innerWidth, H = window.innerHeight;
  const pos = {};
  graphEl.querySelectorAll('.node').forEach(n => n.remove());
  linesEl.innerHTML = '';

  NODES.forEach(n => pos[n.id] = { x: n.cx * W, y: n.cy * H });

  // Draw edges
  EDGES.forEach(([a, b]) => {
    const pa = pos[a], pb = pos[b];
    ['edge', 'edge-bright'].forEach(cls => {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', pa.x); line.setAttribute('y1', pa.y);
      line.setAttribute('x2', pb.x); line.setAttribute('y2', pb.y);
      line.setAttribute('class', cls);
      linesEl.appendChild(line);
    });
  });

  // Draw nodes
  NODES.forEach((n, idx) => {
    const el = document.createElement('div');
    el.className = 'node' + (n.isCenter ? ' center' : '');
    el.style.left = pos[n.id].x + 'px';
    el.style.top  = pos[n.id].y + 'px';
    el.style.animationDelay = (idx * 80) + 'ms';

    if (n.isCenter) {
      el.innerHTML = `<div class="node-circle"><span class="node-label">Portfolio</span></div>`;
    } else {
      el.innerHTML = `
        <div class="node-circle">
        <span class="node-label">${n.label}</span>
        <span class="node-icon">${n.icon}</span>
        </div>`;
      el.onclick = () => openPanel(n.id);
    }
    graphEl.appendChild(el);
  });
}

// -------------------------------------------------------
// PANEL
// -------------------------------------------------------
function openPanel(id) {
  const section = CONTENT[id];
  if (!section) return;

  document.getElementById('panel-title').innerText = section.title;
  const body = document.getElementById('panel-body');

  body.innerHTML = section.cards.map((c, i) => `
    <div class="card" onclick="openModal('${id}', ${i})">
      ${c.meta ? `<div class="card-meta">${c.meta}</div>` : ''}
      <div class="card-title">${c.title}</div>
      ${c.body ? `<div class="card-body">${c.body}</div>` : ''}
      ${c.tags && c.tags.length ? `
        <div class="card-tags">
          ${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>` : ''}
    </div>
  `).join('');

  document.getElementById('panel').classList.add('active');
  graphEl.style.opacity = '0.07';
}

// -------------------------------------------------------
// MODAL
// -------------------------------------------------------
function openModal(sectionId, cardIndex) {
  const card = CONTENT[sectionId].cards[cardIndex];

  const metaEl  = document.getElementById('modal-meta');
  const titleEl = document.getElementById('modal-title');
  const bodyEl  = document.getElementById('modal-body');
  const tagsEl  = document.getElementById('modal-tags');
  const btn     = document.getElementById('modal-link-btn');

  metaEl.innerText  = card.meta || '';
  titleEl.innerText = card.title;
  bodyEl.innerText  = card.body || '';

  tagsEl.innerHTML = (card.tags && card.tags.length)
    ? card.tags.map(t => `<span class="tag">${t}</span>`).join('')
    : '';

  if (card.link) {
    btn.href = card.link;
    btn.style.display = 'inline-flex';
    btn.innerText = card.linkText || 'Ver más';
  } else {
    btn.style.display = 'none';
  }

  document.getElementById('card-modal-overlay').classList.add('active');
}

// -------------------------------------------------------
// EVENTS
// -------------------------------------------------------
window.addEventListener('resize', () => { initBg(); renderGraph(); });

document.getElementById('panel-back-btn').onclick = () => {
  document.getElementById('panel').classList.remove('active');
  graphEl.style.opacity = '1';
};

document.getElementById('modal-close-btn').onclick = () => {
  document.getElementById('card-modal-overlay').classList.remove('active');
};

document.getElementById('card-modal-overlay').onclick = (e) => {
  if (e.target === document.getElementById('card-modal-overlay')) {
    document.getElementById('card-modal-overlay').classList.remove('active');
  }
};

// -------------------------------------------------------
// INIT
// -------------------------------------------------------
initBg(); drawBg(); renderGraph();