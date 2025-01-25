import React from 'react'

const gojek = () => {
  return (
    <div>
          <div className="h-full border-gf-background-border-secondary p-4 md:rounded-2xl md:border">
      <div className="flex w-full items-stretch justify-between">
        <div className="mt-1 ml-1 mr-4 flex w-full flex-col">
          <h3 className="text-gf-content-primary line-clamp-2 gf-label-m">Ayam Geprek Sambal Korek</h3>
          <p className="mt-1 break-words text-gf-content-muted line-clamp-2 gf-body-s">
            Sambal Korek khas Mr Suprek. Ayam Geprek, nasi uduk / nasi putih. Wajb Coba!
          </p>
          <div className="mt-3 flex flex-wrap items-center text-gf-content-primary gf-label-s">
            <div className="flex">
              <span className="mr-4 mt-0.5">27.000</span>
            </div>
          </div>
        </div>
        <div className="relative h-[112px] w-[112px] flex-shrink-0 lg:h-[120px] lg:w-[120px]">
          <img
            alt="Ayam Geprek Sambal Korek"
            src="https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/69c3c2da-0d9f-45c8-b826-5a55ffebd793_Go-Biz_20241031_145302.jpeg?auto=format"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </div>
      <div className="mt-3 flex items-center">
        <div className="flex min-w-[50%] items-center pr-1 text-gf-content-muted gf-body-s md:gf-body-xs lg:gf-body-s">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="mr-1 w-6 md:w-4 lg:w-6"
          >
            <g clipPath="url(#a)">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M6.5 22a1 1 0 1 1 0-2h11a1 1 0 1 1 0 2h-11Zm11.825-3.898c-.891.604-1.981.898-3.14.898H8.898c-1.4 0-2.718-.435-3.702-1.297-1.525-1.334-2.294-3.5-2.185-6.612a1.126 1.126 0 0 1 1.122-1.09h15.736c.613 0 1.102.492 1.121 1.088.122 3.492-.817 5.759-2.664 7.013ZM17 4.538a1 1 0 1 1 2 0V7a1 1 0 1 1-2 0V4.538Zm-12 0a1 1 0 1 1 2 0V7a1 1 0 0 1-2 0V4.538ZM11 3a1 1 0 1 1 2 0v2.462a1 1 0 1 1-2 0V3Z"
                clipRule="evenodd"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="currentColor" d="M0 0h24v24H0z" />
              </clipPath>
            </defs>
          </svg>
          <span className="mt-1">Dapat dicustom</span>
        </div>
        <button
          type="button"
          className="inline-flex cursor-pointer appearance-none items-center justify-center space-x-2 rounded-full text-center outline-none transition-all focus:!border-gf-interactive-focus focus:border disabled:pointer-events-none gf-label-m py-2 px-4 bg-gf-interactive-fill-alternate text-gf-content-brand border-gf-interactive-border-action active:bg-gf-interactive-fill-brand-default active:text-gf-content-inverse border hover:bg-[#D3FFD3] focus:bg-[#D3FFD3] active:!border-transparent ml-auto w-[112px] lg:w-[120px]"
        >
          <span>Tambah</span>
        </button>
      </div>
    </div>
    </div>
  )
}

export default gojek
