import React from 'react';
import './search.css';

export default function Search() {
  return (
    <div className="page-wrapper">
      {/* Main Content */}
      <div className="main-content">
        <h1 className="Search-heading">Find your correct place from few clicks</h1>
        <div className="Search-container">
          <div className="Search-form">
            <form>
              <div className="form">
                {/* Property Type */}
                <div className="form-item">
                  <label>Property Type:</label>
                  <select id="propertyType" name="propertyType">
                    <option value="type">Property Type</option>
                    <option value="house">House</option>
                    <option value="flat">Flat</option>
                    <option value="bungalow">Bungalow</option>
                    <option value="maisonette">Land</option>
                    <option value="apartment">Apartment</option>
                  </select>
                </div>

                {/* Search Area */}
                <div className="form-item">
                  <label>Search Area:</label>
                  <select id="searchArea" name="searchArea">
                    <option value="area">Search area</option>
                    <option value="BR1">BR1</option>
                    <option value="BR2">BR2</option>
                    <option value="BR3">BR3</option>
                    <option value="BR4">BR4</option>
                    <option value="BR5">BR5</option>
                    <option value="BR6">BR6</option>
                  </select>
                </div>

                {/* Number of Bedrooms */}
                <div className="form-item">
                  <label>No of Bedrooms:</label>
                  <select id="minBedroom" name="NoOfBedroom">
                    <option value="min">No Min</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <select id="maxBedroom" name="NoOfBedroom">
                    <option value="max">No Max</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                {/* Price Range */}
                <div className="form-item">
                  <label>Price range:</label>
                  <select id="minPrice" name="price">
                    <option value="min">Min Price</option>
                    <option value="1">100,000</option>
                    <option value="2">200,000</option>
                    <option value="3">300,000</option>
                    <option value="4">400,000</option>
                    <option value="5">500,000</option>
                    <option value="6">600,000</option>
                    <option value="7">700,000</option>
                    <option value="8">800,000</option>
                    <option value="9">900,000</option>
                    <option value="10">1,000,000</option>
                    <option value="11">1,100,000</option>
                    <option value="12">1,200,000</option>
                    <option value="13">1,300,000</option>
                    <option value="14">1,400,000</option>
                    <option value="15">1,500,000</option>
                  </select>
                  <select id="maxPrice" name="price">
                    <option value="max">Max Price</option>
                    <option value="1">100,000</option>
                    <option value="2">200,000</option>
                    <option value="3">300,000</option>
                    <option value="4">400,000</option>
                    <option value="5">500,000</option>
                    <option value="6">600,000</option>
                    <option value="7">700,000</option>
                    <option value="8">800,000</option>
                    <option value="9">900,000</option>
                    <option value="10">1,000,000</option>
                    <option value="11">1,100,000</option>
                    <option value="12">1,200,000</option>
                    <option value="13">1,300,000</option>
                    <option value="14">1,400,000</option>
                    <option value="15">1,500,000</option>
                  </select>
                </div>

                {/* Added to Site */}
                <div className="form-item centered">
                  <label className="label2">Added to site:</label>
                  <div>
                    <label htmlFor="startDate" className="label2">Start Date:</label>
                    <input type="date" id="startDate" name="startDate" className="search-input" />
                  </div>
                  <div>
                    <label htmlFor="endDate" className="label2">End Date:</label>
                    <input type="date" id="endDate" name="endDate" className="search-input" />
                  </div>
                </div>

                {/* Search Button */}
                <div className="form-item centered">
                <br/> <br/>
                  <button type="submit" name="search" className="search-button">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="Search-listing">
          <h1>Properties</h1>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Urban Propertys. All rights reserved.</p>
      </footer>
    </div>
  );
}
