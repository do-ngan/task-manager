const SampleCard = ({ title }) => {
  return (
    <div
      class="card m-3 shadow p-3 mb-5 bg-white rounded"
      style={{ width: "18rem", height: "300px" }}
    >
      <div class="card-body">
        <div class="card-header">
          <h5 class="card-title text-info">{title}</h5>
        </div>
        <p>02/19/2024</p>
        <p class="card-text mt-3">Sample landing card</p>
        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            class="far fa-edit"
            style={{ marginRight: "20px", cursor: "pointer" }}
          ></i>
          <i class="fas fa-trash-alt" style={{ cursor: "pointer" }}></i>
        </div>
      </div>
    </div>
  );
};

export default SampleCard;
