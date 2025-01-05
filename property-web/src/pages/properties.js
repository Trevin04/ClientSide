import React, { useState } from "react";
import propertiesData from "../data/properties.json"; // Import JSON
import "./properties.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Search() {
  const [filteredProperties, setFilteredProperties] = useState(
    propertiesData.properties
  );
  const [selectedProperty, setSelectedProperty] = useState(null); // For modal details
  const [favorites, setFavorites] = useState([]); // Favorites list

  const handleSearch = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const propertyType = formData.get("propertyType");
    const searchArea = formData.get("searchArea");
    const minBedrooms = parseInt(formData.get("NoOfBedroomMin"), 10) || 0;
    const maxBedrooms =
      parseInt(formData.get("NoOfBedroomMax"), 10) || Infinity;
    const minPrice = parseInt(formData.get("priceMin"), 10) || 0;
    const maxPrice = parseInt(formData.get("priceMax"), 10) || Infinity;
    const startDate = formData.get("startDate")
      ? new Date(formData.get("startDate"))
      : null;
    const endDate = formData.get("endDate")
      ? new Date(formData.get("endDate"))
      : null;

    const filtered = propertiesData.properties.filter((property) => {
      const addedDate = new Date(
        `${property.added.year}-${String(property.added.month).padStart(
          2,
          "0"
        )}-${String(property.added.day).padStart(2, "0")}`
      );

      return (
        (propertyType === "type" || property.type === propertyType) &&
        (searchArea === "area" || property.location.includes(searchArea)) &&
        property.bedrooms >= minBedrooms &&
        property.bedrooms <= maxBedrooms &&
        property.price >= minPrice &&
        property.price <= maxPrice &&
        (!startDate || addedDate >= startDate) &&
        (!endDate || addedDate <= endDate)
      );
    });

    setFilteredProperties(filtered);
  };

  const openDetailsModal = (property) => {
    setSelectedProperty(property);
  };

  const closeDetailsModal = () => {
    setSelectedProperty(null);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const addToFavorites = (property) => {
    if (!favorites.some((fav) => fav.id === property.id)) {
      setFavorites([...favorites, property]);
    }
  };

  const removeFromFavorites = (propertyId) => {
    setFavorites(favorites.filter((fav) => fav.id !== propertyId));
  };

  const handleDrop = (event) => {
    const propertyId = event.dataTransfer.getData("propertyId");
    const property = filteredProperties.find((prop) => prop.id === propertyId);

    if (property) {
      addToFavorites(property);
    }
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  return (
    <div className="page-wrapper">
      <div className="main-content">
        <h1 className="Search-heading">
          Find your correct place from a few clicks
        </h1>
        <div className="Search-container">
          <div className="Search-form">
            <form onSubmit={handleSearch}>
              <div className="form">
                {/* Property Type */}
                <div className="form-item">
                  <label>Property Type:</label>
                  <select id="propertyType" name="propertyType">
                    <option value="type">Property Type</option>
                    <option value="Apartment">Apartments</option>
                    <option value="Villa">Villas</option>
                    <option value="Office Space">Office Spaces</option>
                    <option value="House">Houses</option>
                    <option value="Land">Lands</option>
                  </select>
                </div>

                {/* Search Area */}
                <div className="form-item">
                  <label>Search Area:</label>
                  <select id="searchArea" name="searchArea">
                    <option value="area">Search area</option>
                    {Array.from({ length: 10 }, (_, i) => (
                      <option value={`BR${i + 1}`} key={`BR${i + 1}`}>
                        BR{i + 1}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Number of Bedrooms */}
                <div className="form-item">
                  <label>No of Bedrooms:</label>
                  <select id="NoOfBedroomMin" name="NoOfBedroomMin">
                    <option value="">No Min</option>
                    {Array.from({ length: 5 }, (_, i) => (
                      <option value={i + 1} key={`min-${i + 1}`}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <select id="NoOfBedroomMax" name="NoOfBedroomMax">
                    <option value="">No Max</option>
                    {Array.from({ length: 5 }, (_, i) => (
                      <option value={i + 1} key={`max-${i + 1}`}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div className="form-item">
                  <label>Price range:</label>
                  <select id="priceMin" name="priceMin">
                    <option value="">Min Price</option>
                    {Array.from({ length: 15 }, (_, i) => (
                      <option
                        value={(i + 1) * 100000}
                        key={`min-price-${i + 1}`}
                      >
                        {(i + 1) * 100000}
                      </option>
                    ))}
                  </select>
                  <select id="priceMax" name="priceMax">
                    <option value="">Max Price</option>
                    {Array.from({ length: 15 }, (_, i) => (
                      <option
                        value={(i + 1) * 100000}
                        key={`max-price-${i + 1}`}
                      >
                        {(i + 1) * 100000}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Added to Site */}
                <div className="form-item centered">
                  <label>Added to site:</label>
                  <div>
                    <label htmlFor="startDate" className="label2">
                      Start Date:
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      className="search-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="endDate" className="label2">
                      End Date:
                    </label>
                    <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      className="search-input"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <div className="form-item centered">
                  <button type="submit" name="search" className="search-button">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="Search-results">
          {/* Favorites List */}
          <div
            className="favourites-list"
            onDrop={handleDrop}
            onDragOver={allowDrop}
          >
            <h2>Favourites</h2>
            {favorites.length > 0 ? (
              <ul>
                {favorites.map((property) => (
                  <li key={property.id} className="favourite-item">
                    <img
                      src={property.picture}
                      alt={property.type}
                      className="favourite-thumbnail"
                    />
                    <div className="favourites-content">
                      <h3>{property.type}</h3>
                      <p>{property.price.toLocaleString()} LKR</p>
                    </div>
                    <button
                      className="favourites-remove-button"
                      onClick={() => removeFromFavorites(property.id)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Drag properties here or click the favourite button to save.</p>
            )}
          </div>

          {/* Properties Listing */}
          <div className="Search-listing">
            <h1>Properties</h1>
            {filteredProperties.length > 0 ? (
              <ul>
                {filteredProperties.map((property) => (
                  <li
                    key={property.id}
                    className="property-item"
                    draggable
                    onDragStart={(e) =>
                      e.dataTransfer.setData("propertyId", property.id)
                    }
                  >
                    <img
                      src={property.picture}
                      alt={property.type}
                      className="property-thumbnail"
                    />
                    <h2>
                      {property.type} - {property.price.toLocaleString()} LKR
                    </h2>
                    <p>{property.description}</p>
                    <p>
                      <strong>Location:</strong> {property.location}
                    </p>
                    <button
                      className="view-details-button"
                      onClick={() => openDetailsModal(property)}
                    >
                      View Details
                    </button>
                    <button
                      className="favourite-button"
                      onClick={() => addToFavorites(property)}
                    >
                      ❤️ Favourite
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No properties found.</p>
            )}
          </div>
        </div>
      </div>

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="modal-overlay" onClick={closeDetailsModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeDetailsModal}>
              &times;
            </button>
            <h2>{selectedProperty.type}</h2>
            <Slider {...sliderSettings}>
              {selectedProperty.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`Slide ${idx + 1} of ${selectedProperty.type}`}
                  className="property-detail-image"
                />
              ))}
            </Slider>
            <p>
              <strong>Bedrooms:</strong> {selectedProperty.bedrooms || "N/A"}
            </p>
            <p>
              <strong>Bathrooms:</strong> {selectedProperty.bathrooms || "N/A"}
            </p>
            <p>
              <strong>Facilities:</strong>{" "}
              {selectedProperty.facilities?.join(", ") || "N/A"}
            </p>
            <p>
              <strong>Price:</strong> {selectedProperty.price.toLocaleString()}{" "}
              LKR
            </p>
            <p>
              <strong>Description:</strong> {selectedProperty.description}
            </p>
            <p>
              <strong>Location:</strong> {selectedProperty.location}
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Urban Propertys. All rights reserved.</p>
      </footer>
    </div>
  );
}
