import React from 'react';

const Note = (props) => {
  const handleDelete = () => {
    props.deleteNote();
  };

  return (
    <div className="border-2 px-5 py-2 w-full rounded my-10 relative">
      <div>
        <h1 className="flex justify-center items-center py-2 text-xl font-bold">
          {props.title}
        </h1>
        <h2 className="text-justify">{props.content}</h2>
      </div>
      <button
        onClick={handleDelete}
        className="absolute bottom-0 right-0 bg-yellow-400 text-sm px-2 py-1 rounded-md">
        Delete
      </button>
    </div>
  );
};

export default Note;
