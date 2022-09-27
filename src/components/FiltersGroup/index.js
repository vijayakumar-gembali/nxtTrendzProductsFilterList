import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const renderRatingsFilterList = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props
      const onClickRatingItem = () => changeRating(rating.ratingId)

      const ratingClassName =
        activeRatingId === rating.ratingId ? 'and-up active-rating' : 'and-up'
      return (
        <li
          onClick={onClickRatingItem}
          key={rating.ratingId}
          className="rating-item"
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingFilter = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="rating-list">{renderRatingsFilterList()}</ul>
    </div>
  )

  const renderCategoryFilterList = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {activeCategoryId, changeCategory} = props
      const onClickCategoryItem = () => changeCategory(category.categoryId)

      const isActive = activeCategoryId === category.categoryId
      const categoryClassName = isActive
        ? 'category-name active-category-name'
        : 'category-name'

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }
  const renderProductCategory = () => (
    <div>
      <h1 className="category-heading">Category</h1>
      <ul className="category-list">{renderCategoryFilterList()}</ul>
    </div>
  )

  const onChangeSeacrhInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          placeholder="Search"
          className="search-input"
          onChange={onChangeSeacrhInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategory()}
      {renderRatingFilter()}
      <button className="clear-button" onClick={clearFilters} type="button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
