import React, { useState, useEffect } from "react";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [newFeedback, setNewFeedback] = useState("");

  useEffect(() => {
    const savedFeedbacks = localStorage.getItem("feedbacks");
    if (savedFeedbacks) {
      setFeedbacks(JSON.parse(savedFeedbacks));
    }
  }, []);

  useEffect(() => {
    if (feedbacks.length > 0) {
      localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
    }
  }, [feedbacks]);

  const addFeedback = () => {
    if (newFeedback.trim() === "") return;

    const updatedFeedbacks = [
      ...feedbacks,
      { id: Date.now(), text: newFeedback },
    ];
    setFeedbacks(updatedFeedbacks);
    setNewFeedback("");
  };

  // Function to delete a feedback item
  const deleteFeedback = (id) => {
    const updatedFeedbacks = feedbacks.filter((feedback) => feedback.id !== id);
    setFeedbacks(updatedFeedbacks);
    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks));
  };

  return (
    <div className="feedback-container">
      <h2>Customer Feedback</h2>

      {/* Feedback Input */}
      <div className="feedback-input">
        <textarea
          value={newFeedback}
          onChange={(e) => setNewFeedback(e.target.value)}
          placeholder="Write your feedback..."
        />
        <button onClick={addFeedback}>Submit</button>
      </div>

      {/* Feedback List */}
      <div className="feedback-list">
        {feedbacks.length === 0 ? (
          <p className="no-feedback">No feedback yet. Be the first!</p>
        ) : (
          feedbacks.map((feedback) => (
            <div key={feedback.id} className="feedback-item">
              <p>{feedback.text}</p>
              <button onClick={() => deleteFeedback(feedback.id)}>❌</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Feedback;
