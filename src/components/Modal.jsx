

const Modal = () => {
  const [formInputObj, setFormInputObj] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    fatherFirstName: "",
    fatherLastName: "",
    motherName: "",
    contactNo: "",
    emergencyContactNo: "",
    marriedStatus: "",
    localAddress: "",
    cityOrTown: "",
    state: "",
    pinCode: "",
    permanentAddress: "",
    email: "",
    adhaarNo: "",
    anyOtherIdentity: "",
    role: "",
    joiningDate: "",
    workExperience: "",
    higherQualification: "",
    bloodGroup: "",
    profilePicture: "",
  });
  const changeToNumber = () => {
    formInputObj.contactNo = Number(formInputObj.contactNo);
    formInputObj.emergencyContactNo = Number(formInputObj.emergencyContactNo);
    formInputObj.pinCode = Number(formInputObj.pinCode);
    formInputObj.adhaarNo = Number(formInputObj.adhaarNo);
  };
  // * handles the onChange foreach input

  const handleChange = (e) => {
    setFormInputObj({ ...formInputObj, [e.target.name]: e.target.value });
  };

  // * Submit the form

  const handleSubmit = async (e) => {
    e.preventDefault();
    changeToNumber();

    console.log(formInputObj);

    let formData = new FormData();
    for (let key in formInputObj) {
      formData.append(key, formInputObj[key]);
    }
    console.log(formData);
  };

  return (
    <>
      <div
        className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  transition ease-in duration-300`}
      >
        <div className=" my-6 mx-auto w-">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white  dark:bg-gray-700 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Modal Title</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/* FORM */}
            <div className=" p-6 flex-auto">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
                  {/* INPUTS*/}
                  {formArray.map((entry) => {
                    return (
                      <FormInput
                        key={entry.name}
                        id={entry.id}
                        name={entry.name}
                        label={entry.label}
                        type={entry.type}
                        handleChange={handleChange}
                      />
                    );
                  })}
                </div>

                {/* SUBMIT BUTTON */}
                <div className="flex justify-end mt-6">
                  <button
                    className="text-red-500 border border-red-800 rounded-xl font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    type="submit"
                    className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"></div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
