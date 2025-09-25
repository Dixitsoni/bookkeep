import React from "react";
import Layout from "../layout/Layout";

export default function Career() {
  return (
    <Layout>
      <div className="min-h-screen bg-white relative">
        {/* Header Background */}
        <div className="absolute top-0 w-full h-48 bg-gradient-to-r from-blue-400 to-blue-700 flex items-center justify-center z-0">
          <h1 className="text-4xl text-white font-bold text-center px-8">
            Cost-Effective Offshore <br /> Accounting Talent On Demand
          </h1>
        </div>

        {/* Centered Form Card */}
        <div className="flex items-start justify-center leading-10 pt-52 pb-10 relative z-7">
          <div className="bg-white rounded shadow-lg w-full max-w-3xl px-8 py-10">
            <h2 className="text-xl font-semibold mb-2">Be Part Of Our Team</h2>
            <p className="text-xs text-gray-600 mb-4">
              Ready to be a part of Fox Team & work with smart experts? Apply Today!
            </p>

            {/* Form starts here */}
            <form className="space-y-3">
              <div>
                <label className="font-medium text-gray-700">{"What's Your Name?"}</label>
                <input type="text" className="mt-1 w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="font-medium text-gray-700">{"What's Your Email ID?"}</label>
                <input type="email" className="mt-1 w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="font-medium text-gray-700">{"What's Your Contact Number?"}</label>
                <input type="text" className="mt-1 w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="font-medium text-gray-700">Could You Upload Your Resume?</label>
                <input type="file" className="mt-1 w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="font-medium text-gray-700">Open For Working From Office?</label>
                <div className="space-y-1 mt-1">
                  <label className="block"><input type="radio" name="office" className="mr-2" />Gurgaon/Noida/Delhi/NCR locations</label>
                  <label className="block"><input type="radio" name="office" className="mr-2" />Work from Fox Office weekend locations</label>
                  <label className="block"><input type="radio" name="office" className="mr-2" />Work from Home</label>
                  <label className="block"><input type="radio" name="office" className="mr-2" />Mixed Schedule</label>
                </div>
              </div>
              <div>
                <label className="font-medium text-gray-700">What is Position You Are Applying For?</label>
                <div className="space-y-1 mt-1">
                  {/* Replace options below with actual list */}
                  <label className="block"><input type="radio" name="position" className="mr-2" /> Senior/Assistant USGAAP Accounting Team</label>
                  <label className="block"><input type="radio" name="position" className="mr-2" /> Senior Indian GAAP Accounting Team</label>
                  <label className="block"><input type="radio" name="position" className="mr-2" /> Assistant Indian GAAP Accounting Team</label>
                  {/* Add more options as needed */}
                </div>
              </div>
              <div>
                <label className="font-medium text-gray-700">Any Professional Work Experience?</label>
                <div className="space-y-1 mt-1">
                  <label className="block"><input type="radio" name="experience" className="mr-2" /> Fresher</label>
                  <label className="block"><input type="radio" name="experience" className="mr-2" /> 1-2 Years</label>
                  <label className="block"><input type="radio" name="experience" className="mr-2" /> 2-5 Years</label>
                  <label className="block"><input type="radio" name="experience" className="mr-2" /> 5+ Years</label>
                </div>
              </div>
              <div>
                <label className="font-medium text-gray-700">{"What's Your Notice Period? (days)"}</label>
                <input type="text" className="mt-1 w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="font-medium text-gray-700">What Is Your Current Compensation? (Annual INR)</label>
                <input type="text" className="mt-1 w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="font-medium text-gray-700">What Is Your Expected Compensation? (Annual INR)</label>
                <input type="text" className="mt-1 w-full border rounded px-3 py-2" />
              </div>
              <button type="submit" className="bg-blue-700 text-white py-2 px-6 rounded font-semibold w-full mt-4">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
