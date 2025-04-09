import { closeModal } from "@/redux/features/modal/modalSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function ViewAllupdate({
  handleCloseViewUpdateModal,
  commentsData,
  // commentFor
}) {
  // const
  const [changed, setChanged] = useState(false);

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
    handleCloseViewUpdateModal();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //console.log("E", e.target[0].value);

    commentsData.push({
      name: "John",
      comment: e.target[0].value,
      description: "Not good",
      profilePic: "",
      image: "",
      date: "2024-04-19",
    });

    if (changed === false) {
      setChanged(true);
    }
    setChanged(true);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("bg-black")) {
        handleClose();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[729px] h-[500px] mb-16">
        <p className="text-[#FFA902] border-2 text-center py-2">Activity</p>
        <form action="" method="post" onSubmit={handleFormSubmit}>
          <div className="flex justify-between mt-5">
            <div className="w-[60px] h-[60px] rounded-full bg-black mr-5"></div>
            <div className="mr-5 h-[60px]">
              <textarea
                style={{ resize: "none" }}
                name="comment"
                placeholder="write a comment on this procurement"
                className="border-l-0 border-t-0 border-b-0 border-r-2 border-secondary w-[480px] h-[60px]"
              ></textarea>
            </div>
            <button type="submit" className="w-[100px] bg-[#D9D9D9]">
              Post
            </button>
          </div>
        </form>
        <hr className="mt-5 text-[#D9D9D9]" />
        <div className="mt-5 mb-5">
          {commentsData[0] ? (
            commentsData.map((item, key) => (
              <div className="flex mb-5">
                <div className="w-[60px] h-[60px] rounded-full bg-black mr-5"></div>

                <div>
                  <p>
                    {item.name} - {item.date}
                  </p>
                  <p>{item.comment}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-between mb-3"></div>
          )}
        </div>
      </div>
    </div>
  );
}
