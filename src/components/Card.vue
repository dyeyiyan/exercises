<template>
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="../assets/img/dog1.jpg" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Bambie</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "card-details",
  props: {
      name: String,
      description: String
  },
};
</script>