import LogoFull from '../assets/branding/logo-full.svg';

interface LogoProps {
  className?: string;
  isFull?: boolean;
}

export function Logo({ className, isFull }: LogoProps) {
  if (isFull) {
    return (
      <img className={className} src={LogoFull} alt="brand image" />   
    )
  }

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="188"
      height="189"
      fill="none"
      viewBox="0 0 188 189"
    >
      <path
        fill="#fff"
        d="M93.823 94.688c0-25.875 21.563-47.437 47.438-47.437 22.166 0 41.141 15.783 46.143 36.57 1.294 5.52-2.76 10.867-8.366 10.867zM93.823 94.688c0 25.875-21.562 47.438-47.437 47.438-22.167 0-41.142-15.784-46.144-36.57-1.294-5.52 2.76-10.868 8.366-10.868zM93.823 94.688c-25.875 0-47.437-21.562-47.437-47.437 0-22.167 15.783-41.142 36.57-46.144 5.52-1.294 10.867 2.76 10.867 8.366zM93.823 94.688c25.875 0 47.438 21.563 47.438 47.438 0 22.166-15.784 41.141-36.57 46.143-5.52 1.294-10.868-2.76-10.868-8.366z"
      >
      </path>
    </svg>
  )
}