import React from "react";
import { Container } from "../container/container";

export const Navbar: React.FC = () => {
  return (
    <header>
      <Container>
        <div className=" flex items-center justify-between">
          <span className="h-12 w-auto">
            <svg
              viewBox="238.882 239.306 22.6 21.67"
              width="64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs />
              <path
                d="m258.4 236.207-8-3c-.3-.1-.5-.1-.8 0l-8 3c-.3.1-.6.5-.6.9s.3.8.6.9l8 3c.2.1.3.1.4.1.1 0 .2 0 .4-.1l8-3c.3-.1.6-.5.6-.9s-.3-.8-.6-.9z"
                fill="#7000ff"
                transform="translate(0 6.88)"
              />
              <path
                d="M250 253.107c-.1 0-.2 0-.4-.1l-8-3c-.3-.1-.6-.5-.6-.9v-8c0-.6.4-1 1-1s1 .4 1 1v7.3l7 2.6 7-2.6v-7.3c0-.6.4-1 1-1s1 .4 1 1v8c0 .4-.3.8-.6.9l-8 3c-.2.1-.3.1-.4.1z"
                fill="#7000ff"
                transform="translate(0 6.88)"
              />
            </svg>
          </span>
          <div className=" flex gap-4 items-center">
            <div className="flex flex-col justify-center ml-3">
              <input
                type="checkbox"
                name="light-switch"
                className="light-switch sr-only"
              />
              <label className="relative cursor-pointer p-2">
                <svg
                  className="dark:hidden"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-slate-300"
                    d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
                  />
                  <path
                    className="fill-slate-400"
                    d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
                  />
                </svg>
                <svg
                  className="hidden dark:block"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-slate-400"
                    d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
                  />
                  <path
                    className="fill-slate-500"
                    d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
                  />
                </svg>
                <span className="sr-only">Switch to light / dark version</span>
              </label>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
