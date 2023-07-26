import React from 'react';

const Categories = ({ categories, filterTypes }) => {
  return (
    <section>
      <h1>Menu Category</h1>

      <div className="flex flex-wrap mt-4">
        {categories.map((category, index) => {
          const { catName, icon } = category;
          return (
            <button
              key={index}
              className="flex items-center px-2 m-2 cursor-pointer border-2 border-primary rounded-md drop-shadow-md outline-none"
              onClick={() => filterTypes(catName)}
            >
              {catName === 'all' ? '' : <img src={icon} alt={catName} />}
              <p>{catName}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
