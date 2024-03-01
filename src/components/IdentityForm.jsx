import React from 'react';
import { HiCalendar, HiChevronDown } from 'react-icons/hi';

const IdentityForm = () => {
  const inputTextStyle = `border border-gray-300 rounded-lg px-3 py-2 w-full max-w-[100%] focus:outline-none focus:border-[#444ce7]`;
  const selectStyle = `border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 invalid:text-gray-400 [appearance:none]`;
  return (
    <div className="mx-auto max-w-[1280px] flex-1 space-y-4 rounded-md bg-white p-4">
      <div className="m-t border-b pb-4">
        <h2 className="text-xl font-bold">Identity</h2>
        <p className="text-gray-600">
          Lorem mum ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <form>
        <section className="flex flex-col gap-4 lg:flex-row">
          <div className="lg:max-w-52">
            <h1 className="text-lg font-medium">Genereal information</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-6 gap-4">
            <p className="col-span-2 flex flex-col">
              <label for="first-name" className="font-medium">
                Fist name
                <strong>
                  <span aria-label="required"> *</span>
                </strong>
              </label>
              <input
                className={inputTextStyle}
                type="text"
                id="first-name"
                name="first-name"
                placeholder="Input first name"
                required
              />
            </p>
            <p className="col-span-2 flex flex-col">
              <label for="middle-name" className="font-medium">
                Middle name
              </label>
              <input
                className={inputTextStyle}
                type="text"
                id="middle-name"
                name="middle-name"
                placeholder="Input middle name"
              />
            </p>
            <p className="col-span-2 flex flex-col">
              <label for="last-name" className="font-medium">
                Last name
              </label>
              <input
                className={inputTextStyle}
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Input last name"
              />
            </p>
            <p className="col-span-6 flex max-w-[max(calc(50%-0.5rem),275px)] flex-col">
              <label for="date-of-birth" className="font-medium">
                Date of birth
              </label>
              <div className="relative">
                <input
                  className={inputTextStyle}
                  type="text"
                  id="date-of-birth"
                  name="date-of-birth"
                  placeholder="Select date"
                />
                <i className="pointer-events-none absolute right-0 mr-[10px] mt-[0.75rem] text-xl text-gray-600">
                  <HiCalendar />
                </i>
              </div>
            </p>
            <p className="col-span-6 flex max-w-[max(calc(50%-0.5rem),275px)] flex-col">
              <label for="gender" className="font-medium">
                Gender
              </label>
              <div className="relative">
                <select
                  className={selectStyle}
                  type="select"
                  id="gender"
                  name="gender"
                  required
                >
                  <option value="" disabled selected hidden>
                    Select gender
                  </option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
                <i className="pointer-events-none absolute right-0 mr-[10px] mt-[-2.25rem] text-2xl text-gray-600">
                  <HiChevronDown />
                </i>
              </div>
            </p>
            <p className="col-span-3 flex flex-col">
              <label for="country-of-birth" className="font-medium">
                Country of birth
              </label>
              <div className="relative">
                <select
                  className={selectStyle}
                  type="select"
                  id="country-of-birth"
                  name="country-of-birth"
                  required
                >
                  <option value="" disabled selected hidden>
                    Type or select here
                  </option>
                  <option value="SE">Sweden</option>
                  <option value="US">United States</option>
                  <option value="other">Other</option>
                </select>
                <i className="pointer-events-none absolute right-0 mr-[10px] mt-[-2.25rem] text-2xl text-gray-600">
                  <HiChevronDown />
                </i>
              </div>
            </p>
            <p className="col-span-3 flex flex-col">
              <label for="country-of-nationality" className="font-medium">
                Country of nationality
              </label>
              <div className="relative">
                <select
                  className={selectStyle}
                  type="select"
                  id="country-of-nationality"
                  name="country-of-nationality"
                  required
                >
                  <option value="" disabled selected hidden>
                    Type or select here
                  </option>
                  <option value="SE">Sweden</option>
                  <option value="US">United States</option>
                  <option value="other">Other</option>
                </select>
                <i className="pointer-events-none absolute right-0 mr-[10px] mt-[-2.25rem] text-2xl text-gray-600">
                  <HiChevronDown />
                </i>
              </div>
            </p>
            <p className="col-span-6 flex max-w-[max(calc(50%-0.5rem),275px)] flex-col">
              <label for="martial-status" className="font-medium">
                Martial status
              </label>
              <div className="relative">
                <select
                  className={selectStyle}
                  type="select"
                  id="martial-status"
                  name="martial-status"
                  required
                >
                  <option value="" disabled selected hidden>
                    Select martial status
                  </option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="dont-know">I don't know</option>
                </select>
                <i className="pointer-events-none absolute right-0 mr-[10px] mt-[-2.25rem] text-2xl text-gray-600">
                  <HiChevronDown />
                </i>
              </div>
            </p>
            <p className="col-span-6 flex max-w-[max(calc(50%-0.5rem),275px)] flex-col">
              <label for="citizenship-country" className="font-medium">
                Citizenship country
              </label>
              <div className="relative">
                <select
                  className={selectStyle}
                  type="select"
                  id="citizenship-country"
                  name="citizenship-country"
                  required
                >
                  <option value="" disabled selected hidden>
                    Type or select here
                  </option>
                  <option value="SE">Sweden</option>
                  <option value="US">United States</option>
                  <option value="other">Other</option>
                </select>
                <i className="pointer-events-none absolute right-0 mr-[10px] mt-[-2.25rem] text-2xl text-gray-600">
                  <HiChevronDown />
                </i>
              </div>
            </p>
          </div>
        </section>
      </form>
    </div>
  );
};

export default IdentityForm;
