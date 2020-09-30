import React from 'react';
import styles from "../components.module.css"

const clickLink = () => {
    document.getElementById('click').play()
}
const hoverLink = () => {
    document.getElementById('hover').play()
}

const SocialNet = props => {
    return (
        <div className={styles.social_box}>
            <a onMouseEnter={
                !props.audio ? () => hoverLink() : () => false}
               onClick={
                   !props.audio ? () => clickLink() : () => false}
               target="_blank" rel="noopener noreferrer" href="https://instagram.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50}  viewBox="0 0 333333 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="128982" y1="329187" x2="204352" y2="4148.82"><stop offset="0" stop-color="#f58529"/><stop offset=".161" stop-color="#feda77"/><stop offset=".431" stop-color="#dd2a7b"/><stop offset=".741" stop-color="#8134af"/><stop offset="1" stop-color="#515bd4"/></linearGradient></defs><path d="M96206 1436h140927c52923 0 96200 42742 96200 94958v140546c0 52228-43278 94956-96198 94956l-140929-2C43283 331894 0 289166 0 236938V96392C0 44178 43283 1436 96206 1436zm69563 76009c51427 0 93159 41732 93159 93159 0 51433-41732 93159-93159 93159-51441 0-93167-41726-93167-93159 0-51427 41726-93159 93167-93159zm0 31467c34055 0 61694 27633 61694 61694s-27640 61700-61694 61700c-34067 0-61701-27639-61701-61700s27634-61694 61701-61694zm90128-44378c8354 0 15128 6774 15128 15120 0 8354-6774 15128-15128 15128-8348 0-15120-6774-15120-15128 0-8348 6774-15120 15120-15120zM107722 28430h117907c44273 0 80482 36029 80482 80059v118497c0 44028-36209 80051-80482 80051l-117907 2c-44273 0-80488-36023-80488-80051V108487c0-44028 36215-80057 80488-80057z" fill="url(#a)"/></svg>
            </a>
            <a onMouseEnter={
                !props.audio ? () => hoverLink() : () => false}
               onClick={
                   !props.audio ? () => clickLink() : () => false}
               target="_blank" rel="noopener noreferrer" href="https://youtube.com">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 333333 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M302077 0H31255C14069 0 1 14068 1 31256v270822c0 17186 14068 31254 31254 31254h270822c17186 0 31254-14068 31254-31254l2-270824C333333 14068 319265 0 302079 0h-2zm-38146 126961s-1939-13688-7905-19698c-7561-7905-16026-7956-19896-8414-27768-2023-69473-2023-69473-2023h-73s-41686 0-69469 2023c-3885 473-12339 506-19896 8414-5970 6010-7868 19698-7868 19698s-1976 16063-1976 32159v15052c0 16063 1975 32158 1975 32158s1939 13688 7868 19709c7557 7905 17489 7648 21923 8491 15897 1518 67531 1975 67531 1975s41742-74 69509-2059c3885-459 12336-506 19896-8414 5970-6010 7905-19713 7905-19713s1977-16063 1977-32158v-15051c-40-16063-2016-32158-2016-32158l-11 10-1-1zm-117844 65472v-55811l53644 27998-53644 27812z" fill="red"/></svg>
            </a>

            <a onMouseEnter={
                !props.audio ? () => hoverLink() : () => false}
               onClick={
                   !props.audio ? () => clickLink() : () => false}
               target="_blank" rel="noopener noreferrer" href="https://facebook.com">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 333333 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M302077 0H31255C14069 0 1 14068 1 31256v270822c0 17186 14068 31254 31254 31254h270822c17186 0 31254-14068 31254-31254l2-270824C333333 14068 319265 0 302079 0h-2zM187907 95783h35461V53254h-35461c-27307 0-49588 22274-49588 49618v21255h-28355v42539h28350v113412h42533V166666h35427l7094-42539h-42523v-21255c0-3848 3247-7094 7060-7094v6h2z" fill="#3b5998"/></svg>
            </a>
            <a onMouseEnter={
                !props.audio ? () => hoverLink() : () => false}
               onClick={
                   !props.audio ? () => clickLink() : () => false}
               target="_blank" rel="noopener noreferrer" href="https://github.com">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 333333 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="296722" y1="-9630.71" x2="36611" y2="342964"><stop offset="0" stop-color="#5dd069"/><stop offset="1" stop-color="#2bb641"/></linearGradient></defs><path d="M302077 0H31255C14069 0 1 14068 1 31256v270822c0 17186 14068 31254 31254 31254h270822c17186 0 31254-14068 31254-31254l2-270824C333333 14068 319265 0 302079 0h-2zm-62988 98696c-17931-17968-41780-27850-67183-27850-52328-1-94918 42593-94918 94959 0 16727 4382 33089 12684 47464l-13479 49218 50343-13212c13883 7563 29502 11572 45356 11572h38c52331 0 94957-42594 94957-94957 0-25381-9882-49217-27813-67179l14-14zm-67155 146128c-14182 0-28074-3822-40193-11011l-2890-1725-29874 7824 7978-29119-1868-2991c-7943-12543-12089-27060-12089-41992 0-43527 35407-78948 78980-78948 21069 0 40919 8239 55809 23128 14897 14936 23089 34739 23089 55844-35 43558-35443 78980-78948 78980l7 11zm43269-59134c-2359-1200-14039-6922-16206-7714-2168-792-3748-1201-5356 1199-1570 2359-6134 7715-7524 9316-1391 1574-2765 1799-5124 598s-10035-3703-19088-11790c-7043-6285-11818-14070-13208-16428-1389-2358-156-3667 1053-4824 1091-1057 2361-2766 3557-4156 1200-1390 1573-2362 2361-3967 792-1574 406-2964-190-4157-598-1196-5356-12876-7295-17634-1905-4649-3892-4001-5352-4082-1390-71-2963-71-4530-71s-4157 594-6324 2959c-2168 2359-8313 8124-8313 19800 0 11680 8496 22945 9688 24555 1200 1570 16735 25560 40531 35826 5656 2431 10072 3891 13514 5022 5690 1795 10853 1535 14936 932 4564-672 14039-5730 16026-11272 1985-5546 1985-10291 1391-11272-563-1056-2133-1639-4529-2855l-18 15h-1z" fill="url(#a)"/></svg>
            </a>
        </div>
    );
};

export default SocialNet;