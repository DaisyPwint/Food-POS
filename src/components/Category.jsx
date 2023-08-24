import React from 'react';

const Category = ({categories}) => {

  return (
    <section>
      <h1>Menu Category</h1>

      <div className="flex flex-wrap mt-4">
            {
              categories.map(category => (
                <button
              key={category.id}
              className="flex items-center p-3 m-2 cursor-pointer border-2 border-primary rounded-md drop-shadow-md outline-none"
            >
              <p>{category.category}</p>
            </button>
              ))
            }
      </div>
    </section>
  );
};

export default Category;
