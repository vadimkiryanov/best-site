import Card from './ui/Card';

const OurTeam = () => {
  return (
    <>
      {/* <!-- Team --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Title --> */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Our leadership</h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">Creative people</p>
        </div>

        {/* <!-- Grid --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card />

          <a
            className="col-span-full lg:col-span-4 group flex flex-col justify-center text-center rounded-xl p-4 md:p-6 border border-dashed border-gray-200 hover:shadow-sm dark:border-gray-700 "
            href="#"
          >
            <h3 className="text-lg text-gray-800 dark:text-gray-200 ">We are hiring!</h3>
            <div>
              <span className="inline-flex items-center gap-x-2 text-blue-600 group-hover:text-blue-700 dark:text-blue-500 dark:group-hover:text-blue-400">
                See all opening positions
                <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
