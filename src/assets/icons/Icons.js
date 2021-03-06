import React from "react";
import Svg, { Path, Circle, Rect } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-Svg: title */

export const IGLogo = () => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="104"
    height="30"
    fill="none"
    viewBox="0 0 104 30"
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M5.35.103C3.223 1.011.88 3.568.143 6.781c-.934 4.068 2.959 5.79 3.282 5.228.368-.665-.702-.892-.924-3.001-.288-2.728.964-5.775 2.534-7.11.293-.248.278.098.278.737 0 1.145-.06 11.41-.06 13.55 0 2.898-.117 3.816-.329 4.718-.217.918-.56 1.537-.298 1.774.293.268 1.54-.366 2.257-1.392.863-1.227 1.166-2.702 1.221-4.3.066-1.934.061-4.992.066-6.74 0-1.603.025-6.29-.025-9.11C8.126.449 6.243-.273 5.349.103zm98.172 15.226c-.308 0-.449.325-.565.867-.404 1.892-.828 2.32-1.378 2.32-.611 0-1.161-.938-1.303-2.815-.111-1.475-.096-4.192.046-6.894.03-.557-.121-1.103-1.585-1.645-.631-.232-1.55-.577-2.004.547-1.288 3.16-1.793 5.671-1.914 6.692-.005.052-.07.062-.08-.056-.076-.82-.243-2.305-.268-5.425-.005-.608-.131-1.129-.793-1.552-.429-.273-1.731-.763-2.2-.18-.405.474-.88 1.748-1.369 3.259-.399 1.227-.671 2.057-.671 2.057s.005-3.316.01-4.568c0-.475-.318-.63-.414-.66-.434-.13-1.292-.34-1.656-.34-.45 0-.555.252-.555.623 0 .047-.07 4.362-.07 7.379v.428c-.248 1.387-1.05 3.268-1.924 3.268-.879 0-1.288-.783-1.288-4.382 0-2.099.061-3.011.091-4.527.015-.872.05-1.547.05-1.697-.004-.469-.802-.7-1.17-.789-.374-.087-.697-.123-.95-.108-.358.02-.61.258-.61.588v.51c-.46-.732-1.197-1.242-1.692-1.392-1.322-.397-2.705-.046-3.75 1.439-.828 1.175-1.328 2.51-1.525 4.429-.146 1.402-.096 2.825.157 4.027-.308 1.356-.884 1.913-1.51 1.913-.909 0-1.57-1.51-1.494-4.125.05-1.717.389-2.924.757-4.672.157-.742.03-1.134-.293-1.505-.293-.34-.924-.516-1.827-.304-.641.154-1.565.32-2.403.443 0 0 .05-.206.09-.567.218-1.903-1.817-1.748-2.468-1.14-.389.366-.651.794-.752 1.563-.157 1.222.823 1.8.823 1.8-.323 1.495-1.11 3.449-1.924 4.861-.434.758-.772 1.32-1.201 1.913 0-.221 0-.443-.005-.665-.01-3.145.03-5.62.05-6.512.016-.871.05-1.526.05-1.68-.004-.341-.201-.47-.61-.635a4.325 4.325 0 00-1.232-.279c-.555-.046-.893.258-.883.614v.48c-.46-.733-1.197-1.243-1.691-1.393-1.323-.397-2.706-.046-3.751 1.439-.828 1.176-1.368 2.83-1.525 4.414-.141 1.474-.116 2.727.081 3.784-.212 1.057-.818 2.166-1.5 2.166-.873 0-1.373-.784-1.373-4.383 0-2.098.061-3.011.091-4.527.02-.871.05-1.547.05-1.696-.004-.47-.802-.702-1.17-.79-.389-.092-.722-.123-.98-.102-.338.025-.575.335-.575.562v.53c-.46-.731-1.202-1.242-1.691-1.391-1.323-.397-2.696-.036-3.746 1.438-.687.964-1.242 2.032-1.525 4.393-.086.68-.12 1.32-.116 1.918-.272 1.702-1.479 3.656-2.463 3.656-.576 0-1.126-1.14-1.126-3.563 0-3.233.197-7.832.232-8.276l1.49-.025c.62-.005 1.186.01 2.014-.036.413-.021.812-1.537.388-1.723-.197-.087-1.57-.16-2.115-.17-.434-.025-1.711-.123-1.711-.123s.116-3.053.141-3.378c.02-.268-.323-.407-.515-.49-.48-.206-.903-.304-1.408-.407-.702-.15-1.015-.005-1.08.598-.096.908-.142 3.579-.142 3.579-.515 0-2.267-.104-2.777-.104-.48 0-.989 2.084-.333 2.11.757.03 2.08.056 2.959.082 0 0-.04 4.676-.04 6.12v.444c-.48 2.557-2.182 3.934-2.182 3.934.364-1.691-.378-2.96-1.721-4.032a127.622 127.622 0 00-2.565-1.97s.631-.634 1.197-1.908c.399-.902.414-1.938-.56-2.165-1.61-.377-2.944.825-3.337 2.114-.308.995-.142 1.732.459 2.5.04.057.09.114.141.17a60.398 60.398 0 01-1.287 2.419c-1.176 2.067-2.065 3.702-2.736 3.702-.535 0-.53-1.66-.53-3.212 0-1.341.096-3.352.177-5.44.025-.691-.314-1.083-.884-1.439-.343-.216-1.08-.644-1.51-.644-.64 0-2.483.087-4.225 5.213-.217.644-.651 1.825-.651 1.825l.035-6.162c0-.144-.075-.283-.247-.381-.293-.165-1.08-.495-1.777-.495-.333 0-.5.16-.5.474l-.06 9.642c0 .732.02 1.588.09 1.96.071.37.187.68.329.86.141.181.308.32.575.377.252.052 1.636.232 1.706-.304.086-.645.091-1.34.818-3.934 1.131-4.043 2.605-6.012 3.297-6.714.12-.123.262-.129.252.072-.03.887-.131 3.104-.202 4.981-.186 5.033.712 5.966 2 5.966.984 0 2.372-.995 3.861-3.511.93-1.568 1.828-3.11 2.479-4.218.45.423.96.882 1.464 1.366 1.176 1.135 1.56 2.212 1.307 3.233-.196.784-.933 1.588-2.246.804-.384-.226-.545-.402-.929-.665-.207-.139-.525-.18-.712-.03-.49.376-.772.855-.934 1.448-.156.578.414.882 1 1.15.51.232 1.6.438 2.297.464 2.71.093 4.882-1.33 6.396-5.001.273 3.17 1.424 4.965 3.423 4.965 1.337 0 2.68-1.758 3.266-3.485.166.706.419 1.32.737 1.835 1.545 2.485 4.533 1.95 6.038-.16.464-.65.535-.887.535-.887.217 1.99 1.797 2.687 2.7 2.687 1.01 0 2.055-.485 2.787-2.16.086.18.182.355.283.52 1.54 2.485 4.533 1.95 6.033-.16.07-.098.13-.185.186-.268l.046 1.31-1.383 1.289c-2.318 2.16-4.08 3.8-4.21 5.708-.167 2.433 1.776 3.336 3.245 3.454 1.56.124 2.898-.747 3.716-1.974.722-1.078 1.196-3.404 1.161-5.693l-.056-3.336a26.78 26.78 0 002.575-3.594c.919-1.552 1.908-3.63 2.413-5.249 0 0 .858.006 1.772-.051.293-.016.374.041.323.258-.065.263-1.156 4.537-.161 7.383.681 1.95 2.216 2.578 3.124 2.578 1.066 0 2.085-.814 2.63-2.031.066.134.137.263.213.386 1.54 2.486 4.523 1.944 6.037-.16.344-.474.535-.886.535-.886.324 2.062 1.904 2.696 2.807 2.696.94 0 1.833-.392 2.56-2.134.03.768.08 1.397.151 1.593.046.119.313.273.51.345.863.325 1.737.17 2.065.104.227-.047.399-.232.424-.702.06-1.242.025-3.336.394-4.888.62-2.609 1.201-3.62 1.479-4.12.151-.278.328-.324.333-.03.015.603.045 2.361.283 4.733.176 1.743.414 2.774.595 3.099.52.933 1.162.974 1.681.974.334 0 1.025-.093.965-.685-.03-.29.025-2.073.636-4.646.404-1.676 1.07-3.192 1.312-3.743.091-.207.132-.042.132-.01-.05 1.154-.167 4.928.297 6.996.626 2.8 2.444 3.11 3.075 3.11 1.348 0 2.453-1.042 2.827-3.79.07-.676-.061-1.192-.46-1.192zm-56.555-1.696c-.076 1.454-.359 2.67-.803 3.553-.813 1.598-2.413 2.103-3.12-.207-.51-1.665-.338-3.934-.126-5.16.313-1.821 1.1-3.11 2.332-2.986 1.267.129 1.878 1.779 1.717 4.8zm12.343.02c-.07 1.372-.424 2.754-.803 3.533-.787 1.608-2.438 2.114-3.12-.207-.464-1.582-.353-3.63-.126-4.919.298-1.675 1.025-3.227 2.332-3.227 1.273 0 1.899 1.418 1.717 4.82zm.323 9.37c-.015 2.505-.404 4.697-1.237 5.336-1.181.902-2.766.227-2.438-1.598.293-1.62 1.66-3.27 3.675-5.285.005-.006.005.453 0 1.546zm21.303-9.354c-.07 1.506-.398 2.686-.802 3.517-.788 1.608-2.428 2.108-3.12-.207-.379-1.258-.394-3.367-.121-5.125.278-1.789 1.05-3.145 2.332-3.021 1.257.123 1.848 1.779 1.712 4.836z"
      clipRule="evenodd"
    ></Path>
  </Svg>
  )
}

export const HomeIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/Svg"
      width="22"
      height="21"
      fill={props.fill}
      viewBox="0 0 22 21"
    >
      <Path
        stroke="#000"
        strokeWidth="2"
        d="M1.453 10.751l9.524-9.73 9.524 9.73c.29.295.453.696.453 1.12v7.585c0 .319-.25.544-.511.544h-5.479a.51.51 0 01-.492-.524v-4.587c0-1.94-1.545-3.549-3.495-3.549-1.95 0-3.495 1.61-3.495 3.549v4.587a.51.51 0 01-.491.524H1.51A.531.531 0 011 19.456V11.87c0-.424.164-.825.453-1.12z"
      ></Path>
    </Svg>
  );
}

export const SearchIcon = (props) => {
  return (
        <Svg
          xmlns="http://www.w3.org/2000/Svg"
          width="23"
          height="23"
          fill="none"
          height={ props.height || 23 }
          opacity={ props.opacity }
          viewBox="0 0 23 23"
        >
          <Path
            fill="#262626"
            fillRule="evenodd"
            stroke={ props.color || "#262626" }
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={ props.strokeWidth }
            d="M21.669 21.654a.493.493 0 00.001-.697l-4.365-4.366a9.314 9.314 0 002.397-6.24C19.702 5.188 15.513 1 10.35 1 5.188 1 1 5.188 1 10.35c0 5.164 4.188 9.352 9.35 9.352 2.412 0 4.598-.92 6.256-2.417l4.368 4.368a.492.492 0 00.695.001zM1.984 10.351c0-4.612 3.755-8.367 8.367-8.367 4.611 0 8.366 3.755 8.366 8.367 0 4.611-3.755 8.366-8.366 8.366-4.612 0-8.367-3.755-8.367-8.366z"
            clipRule="evenodd"
          ></Path>
        </Svg>
  );
}

export const ReelsIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/Svg"
      width="21"
      height="21"
      fill="none"
      viewBox="0 0 21 21"
    >
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M16 1.8H5A3.2 3.2 0 001.8 5v11A3.2 3.2 0 005 19.2h11a3.2 3.2 0 003.2-3.2V5A3.2 3.2 0 0016 1.8zM5 0a5 5 0 00-5 5v11a5 5 0 005 5h11a5 5 0 005-5V5a5 5 0 00-5-5H5z"
        clipRule="evenodd"
      ></Path>
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M20 7H1V5.2h19V7z"
        clipRule="evenodd"
      ></Path>
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M8 6L4 1 5.573.126l4 5L8 6zM14.5 6l-4-5 1.573-.874 4 5L14.5 6z"
        clipRule="evenodd"
      ></Path>
      <Path
        fill="#000"
        d="M13.75 12.067a.5.5 0 010 .866L8.5 15.964a.5.5 0 01-.75-.433V9.47a.5.5 0 01.75-.433l5.25 3.031z"
      ></Path>
    </Svg>
  )
}

export const ShopIocn = (props) => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="22"
    fill="none"
    viewBox="0 0 19 22"
    style={{ margin: -5 }}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M14.6 6.942H3.48a1.2 1.2 0 00-1.198 1.125l-.474 7.571A4.2 4.2 0 006 20.1h6.08a4.2 4.2 0 004.191-4.462l-.473-7.57a1.2 1.2 0 00-1.197-1.126zm-11.12-1.8A3 3 0 00.484 7.955l-.473 7.57A6 6 0 006 21.9h6.08a6 6 0 005.988-6.374l-.473-7.571A3 3 0 0014.6 5.142H3.479z"
      clipRule="evenodd"
    ></Path>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M9.276 1.8a2.164 2.164 0 00-2.163 2.164v1.178h-1.8V3.964a3.964 3.964 0 017.927 0v1.178h-1.8V3.964A2.164 2.164 0 009.276 1.8zM9.276 11.312a2.164 2.164 0 002.163-2.164v-.236a.9.9 0 111.8 0v.236a3.964 3.964 0 01-7.927 0v-.236a.9.9 0 011.8 0v.236c0 1.195.969 2.164 2.164 2.164z"
      clipRule="evenodd"
    ></Path>
  </Svg>
  )
}

export const AvatarIcon = () => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="none"
    viewBox="0 0 25 25"
  >
    <Circle
      cx="12.5"
      cy="12.5"
      r="11.25"
      stroke="#000"
      strokeWidth="1.5"
    ></Circle>
    </Svg>
  )
}

export const Add = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <Rect
        width="18"
        height="18"
        x="3"
        y="3"
        stroke="#000"
        strokeWidth="1.8"
        rx="5"
      ></Rect>
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="1.8"
        d="M12.1 6.9L12.1 17.1"
      ></Path>
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="1.8"
        d="M6.9 11.8L17.1 11.8"
      ></Path>
    </Svg>
  )
}

export const Heart = (props) => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill={props.fill}
    viewBox="0 0 24 24"
  >
    <Path
      fill="#000"
      stroke="#000"
      strokeWidth="0.6"
      d="M11.5 21.26c-.394 0-.77-.124-1.087-.36-2.154-1.599-7.304-5.576-8.595-7.986C.128 9.765 1.143 5.721 4.075 3.9c.948-.588 2.02-.9 3.111-.9 1.632 0 3.165.668 4.313 1.857C12.65 3.668 14.181 3 15.813 3c1.09 0 2.164.312 3.111.9 2.933 1.821 3.947 5.865 2.262 9.014-1.292 2.41-6.441 6.387-8.596 7.986a1.83 1.83 0 01-1.09.36zM7.185 4.337c-.84 0-1.667.24-2.4.695-2.347 1.46-3.152 4.712-1.788 7.25 1.198 2.237 6.588 6.343 8.211 7.546.17.124.407.124.577 0 1.622-1.207 7.013-5.314 8.211-7.545 1.363-2.539.559-5.795-1.788-7.251a4.525 4.525 0 00-2.396-.695c-1.47 0-2.847.713-3.777 1.951l-.537.721-.536-.721c-.93-1.238-2.302-1.95-3.777-1.95z"
    ></Path>
  </Svg>
  )
}

export const Messenger = () => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <Path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth="1.8"
      d="M5.81 19.748a.9.9 0 00-.331-.765c-2.2-1.78-3.579-4.43-3.579-7.396C1.9 6.277 6.387 1.9 12.01 1.9c5.61 0 10.098 4.376 10.098 9.687 0 5.31-4.499 9.686-10.11 9.686-.932 0-1.818-.119-2.671-.345a.9.9 0 00-.517.016l-3.164 1.058.164-2.254z"
    ></Path>
    <Path
      fill="#000"
      d="M10.15 8.795c.072.01.133.021.205.032 1.073.229 2.17 1.21 3.014 1.793.47.334.869.303 1.339-.01 1-.688 2.038-1.345 3.062-2.023.278-.188.567-.386.905-.136.374.271.145.563-.048.834-1.013 1.398-2.014 2.795-3.039 4.182-.7.96-1.688 1.095-2.75.417-.735-.48-1.494-.928-2.218-1.428-.482-.334-.88-.292-1.338.02-1.013.689-2.038 1.346-3.063 2.024-.277.187-.567.385-.904.125-.338-.25-.157-.532.024-.793 1.049-1.439 2.086-2.878 3.135-4.317.35-.49 1-.782 1.676-.72z"
    ></Path>
  </Svg>
  )
}

export const Notifications = () => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <Path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12.5 3.023C10.833 2.874 7 3.38 5 6.597 2.5 10.617 5 19.107 1.5 20h11"
    ></Path>
    <Path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M11.5 3.023c1.667-.149 5.5.357 7.5 3.574 2.5 4.02 0 12.51 3.5 13.403h-11"
    ></Path>
    <Path
      fill="#000"
      d="M9 22c.505 1.177 1.658 2 3 2s2.495-.823 3-2H9z"
    ></Path>
    <Circle cx="12" cy="2" r="2" fill="#000"></Circle>
  </Svg>
  )
}

export const More = () => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
  >
    <Circle cx="3.5" cy="8.5" r="1.5" fill="#262626"></Circle>
    <Circle cx="9" cy="8.5" r="1.5" fill="#262626"></Circle>
    <Circle cx="14.5" cy="8.5" r="1.5" fill="#262626"></Circle>
  </Svg>
  )
}

export const Burger = () => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth="2"
      d="M1 2L17 2"
    ></Path>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth="2"
      d="M1 8L17 8"
    ></Path>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth="2"
      d="M1 14L17 14"
    ></Path>
  </Svg>
  )
}

export const Dropdown = () => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3.333 6.667L8 11.332l4.667-4.667"
    ></Path>
  </Svg>
  )
}

export const Grid = () => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
  >
    <Path
      stroke="#262626"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6.448 1v16M1.19 11.552h16M11.4 1v16M1.19 6.6h16M1 1h16v16H1V1z"
    ></Path>
  </Svg>
  )
}

export const Tagged = () => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="22"
    fill="none"
    viewBox="0 0 21 22"
  >
    <Path
      fill="#000"
      fillOpacity="0.5"
      d="M10.908 1.17l.376-.33-.376.33zm-.37-.17l.006-.5-.005.5zm2.249 2.304l-.376.33.15.17h.226v-.5zm-4.593 0v.5h.219l.149-.161-.368-.339zm1.971-2.142l.368.338-.368-.338zM8.781 4.143l-.368-.339.368.339zm1.744-1.895l.375-.33-.367-.418-.376.41.368.338zM3.789 19.895v.5h.454l.044-.451-.498-.049zm12.935 0l-.498.049.044.451h.454v-.5zm-4.539-15.76l-.375.33.375-.33zm3.532 15.76v.5h.565l-.068-.56-.496.06zm-10.922 0l-.496-.06-.068.56h.564v-.5zM11.284.84a1 1 0 00-.74-.339l-.011 1 .75-.66zm1.878 2.135L11.284.84l-.751.661 1.878 2.135.751-.66zm4.312-.17h-4.687v1h4.687v-1zm3 3a3 3 0 00-3-3v1a2 2 0 012 2h1zm0 12.591V5.805h-1v12.59h1zm-3 3a3 3 0 003-3h-1a2 2 0 01-2 2v1zm-13.974 0h13.974v-1H3.5v1zm-3-3a3 3 0 003 3v-1a2 2 0 01-2-2h-1zm0-12.59v12.59h1V5.805h-1zm3-3a3 3 0 00-3 3h1a2 2 0 012-2v-1zm4.694 0H3.5v1h4.694v-1zM9.797.822L7.826 2.966l.736.677L10.533 1.5 9.797.823zM10.544.5a1 1 0 00-.747.323l.736.677.011-1zM9.149 4.481l1.744-1.895-.736-.677-1.744 1.895.736.677zm-.736.323a1 1 0 00.736-.323l-.736-.677v1zm-4.913 0h4.913v-1H3.5v1zm-1 1a1 1 0 011-1v-1a2 2 0 00-2 2h1zm0 12.591V5.805h-1v12.59h1zm1 1a1 1 0 01-1-1h-1a2 2 0 002 2v-1zm.29 0H3.5v1h.29v-1zm.497.549a4.61 4.61 0 014.587-4.157v-1a5.61 5.61 0 00-5.582 5.06l.995.097zm4.587-4.157h2.765v-1H8.874v1zm2.765 0a4.61 4.61 0 014.587 4.157l.995-.097a5.61 5.61 0 00-5.582-5.06v1zm5.835 3.608h-.75v1h.75v-1zm1-1a1 1 0 01-1 1v1a2 2 0 002-2h-1zm0-12.59v12.59h1V5.805h-1zm-1-1a1 1 0 011 1h1a2 2 0 00-2-2v1zm-4.913 0h4.913v-1H12.56v1zm-.751-.34a1 1 0 00.75.34v-1l-.75.66zm-1.66-1.887l1.66 1.887.75-.66-1.66-1.888-.75.66zm6.064 17.257a4.61 4.61 0 00-4.575-4.048v1a3.61 3.61 0 013.582 3.169l.993-.12zm-4.575-4.048H8.874v1h2.765v-1zm-2.765 0a4.61 4.61 0 00-4.575 4.048l.993.12a3.61 3.61 0 013.582-3.168v-1zm6.843 3.608H4.795v1h10.922v-1zm-3.09-9.139c0 1.208-.979 2.187-2.186 2.187v1a3.187 3.187 0 003.186-3.187h-1zM10.441 8.07c1.207 0 2.186.98 2.186 2.187h1a3.187 3.187 0 00-3.186-3.187v1zm-2.187 2.187c0-1.208.979-2.187 2.187-2.187v-1a3.187 3.187 0 00-3.187 3.187h1zm2.187 2.187a2.187 2.187 0 01-2.187-2.187h-1a3.187 3.187 0 003.187 3.187v-1zm3.186-2.187a3.187 3.187 0 01-3.186 3.187v1a4.187 4.187 0 004.186-4.187h-1zM10.441 7.07a3.187 3.187 0 013.186 3.187h1a4.187 4.187 0 00-4.186-4.187v1zm-3.187 3.187A3.187 3.187 0 0110.44 7.07v-1a4.187 4.187 0 00-4.187 4.187h1zm3.187 3.187a3.187 3.187 0 01-3.187-3.187h-1a4.187 4.187 0 004.187 4.187v-1z"
    ></Path>
  </Svg>
  )
}

export const Comment = () => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      stroke="#000"
      strokeWidth="0.7"
      d="M21.296 20.817l-1.06-3.957a.945.945 0 01.073-.67c.926-1.856 1.235-4.073.665-6.386-.774-3.13-3.217-5.643-6.339-6.474A9.941 9.941 0 0012.131 3C6.297 3 1.741 8.474 3.314 14.565c.73 2.817 3.74 5.734 6.57 6.421a9.457 9.457 0 002.247.274c1.57 0 3.04-.404 4.33-1.1a.973.973 0 01.461-.122c.078 0 .157.009.235.03l3.852 1.031a.233.233 0 00.287-.283zm-2.278-3.63l.6 2.238-2.135-.57a2.203 2.203 0 00-.56-.073c-.366 0-.735.096-1.066.274a7.765 7.765 0 01-3.726.943 8.329 8.329 0 01-1.952-.239c-2.395-.583-5.034-3.156-5.643-5.513-.635-2.46-.135-4.986 1.37-6.93a7.821 7.821 0 016.225-3.056c.722 0 1.457.095 2.183.291a7.641 7.641 0 015.439 5.556c.473 1.913.278 3.822-.57 5.522a2.2 2.2 0 00-.165 1.556z"
      clipRule="evenodd"
    ></Path>
  </Svg>
  )
}

export const Share = () => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      stroke="#000"
      strokeWidth="0.7"
      d="M22.855 3.445A.896.896 0 0022.072 3l-19.157.014a.908.908 0 00-.854.594.9.9 0 00.056.765c.05.084.116.163.195.232l7.381 6.366 1.8 9.563c.07.376.358.654.738.714a.923.923 0 00.942-.445L22.851 4.35a.89.89 0 00.005-.905zm-18.638.947h15.6L10.424 9.75 4.217 4.39zm8.408 14.592l-1.513-8.036 9.405-5.364-7.892 13.4z"
      clipRule="evenodd"></Path>
    </Svg>
  )
}

export const Bookmark = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill="#000"
        stroke="#000"
        strokeWidth="0.7"
        d="M19.875 2H4.125C3.506 2 3 2.45 3 3.005v19.46c0 .555.366.697.821.308l7.723-6.574a.54.54 0 01.659-.005l7.97 6.594c.456.379.827.232.827-.323V3.005C21 2.449 20.5 2 19.875 2zm-.563 18.02l-5.968-4.937a2.302 2.302 0 00-1.468-.515c-.54 0-1.074.176-1.49.53L4.688 19.95V3.515h14.625V20.02z"
      ></Path>
    </Svg>
  )
}