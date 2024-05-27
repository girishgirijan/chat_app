import React from "react";

export default function NotFoundPage() {
  return (
    <section>
      <div className=" text-white">
        <div className="flex h-screen">
          <div className="m-auto text-center">
            <div>
              <img src="/404.svg" alt="404" />
            </div>
            <p className="text-sm md:text-base text-white p-2 mb-4">
              The stuff you were looking for doesn't exist
            </p>
            <a
              href="/"
              className="btn btn-primary text-white btn-block btn-md"
            >
              Take me home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
