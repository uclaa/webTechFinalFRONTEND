// EventForm.js

import React, { useState } from 'react';

const EventForm = ({ onAddEvent }) => {
  const [formData, setFormData] = useState({
    eventName: '',
    eventPlace: '',
    date: '',
    time: '',
    eventDescription: '',
    eventArtists: [],
    eventPricing: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleArtistInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedArtists = [...formData.eventArtists];
    updatedArtists[index] = {
      ...updatedArtists[index],
      [name]: value
    };
    setFormData({
      ...formData,
      eventArtists: updatedArtists
    });
  };

  const handlePricingInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPricing = [...formData.eventPricing];
    updatedPricing[index] = {
      ...updatedPricing[index],
      [name]: value
    };
    setFormData({
      ...formData,
      eventPricing: updatedPricing
    });
  };

  const addArtist = () => {
    setFormData({
      ...formData,
      eventArtists: [
        ...formData.eventArtists,
        { id: formData.eventArtists.length + 1, artistName: '' }
      ]
    });
  };

  const addPricing = () => {
    setFormData({
      ...formData,
      eventPricing: [
        ...formData.eventPricing,
        { id: formData.eventPricing.length + 1, categoryName: '', price: 0 }
      ]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent(formData);
    // Reset the form after submission (optional)
    setFormData({
      eventName: '',
      eventPlace: '',
      date: '',
      time: '',
      eventDescription: '',
      eventArtists: [],
      eventPricing: []
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Event Name:
        <input
          type="text"
          name="eventName"
          value={formData.eventName}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Event Place:
        <input
          type="text"
          name="eventPlace"
          value={formData.eventPlace}
          onChange={handleInputChange}
        />
      </label>
      <br />

      {/* Add other input fields for date, time, event description, etc. */}

      <h3>Event Artists</h3>
      {formData.eventArtists.map((artist, index) => (
        <div key={index}>
          <label>
            Artist Name:
            <input
              type="text"
              name="artistName"
              value={artist.artistName}
              onChange={(e) => handleArtistInputChange(index, e)}
            />
          </label>
          <br />
        </div>
      ))}
      <button type="button" onClick={addArtist}>
        Add Artist
      </button>
      <br />

      <h3>Event Pricing</h3>
      {formData.eventPricing.map((pricing, index) => (
        <div key={index}>
          <label>
            Category Name:
            <input
              type="text"
              name="categoryName"
              value={pricing.categoryName}
              onChange={(e) => handlePricingInputChange(index, e)}
            />
          </label>
          <br />
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={pricing.price}
              onChange={(e) => handlePricingInputChange(index, e)}
            />
          </label>
          <br />
        </div>
      ))}
      <button type="button" onClick={addPricing}>
        Add Pricing
      </button>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
