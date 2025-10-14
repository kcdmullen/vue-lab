<script setup>
</script>
<template>
  <div class="scroller-wrapper">
    <div class="scroller">
      <div class="scroller-content">
        <img src="@/images/sponsors/Whitson.png" class="img-full logo" />
        <img src="@/images/sponsors/TruTeam.png" class="img-full logo" />
        <img src="@/images/sponsors/TradesMax.png" class="img-full logo" />
        <img src="@/images/sponsors/Resource Valley CTC.png" class="img-full logo" />
        <img src="@/images/sponsors/ProfittAndSons.png" class="img-full logo" />
        <img src="@/images/sponsors/Nationwide Spray Foam.png" class="img-full logo" />
        <img src="@/images/sponsors/McGaha Electric Co.png" class="img-full logo" />
        <img src="@/images/sponsors/Lee Company.png" class="img-full logo" />
        <img src="@/images/sponsors/ComfortSystemsUSA.png" class="img-full logo" />
        <img src="@/images/sponsors/Knoxville Region.png" class="img-full logo" />
        <img src="@/images/sponsors/Joseph Construction.png" class="img-full logo" />
        <img src="@/images/sponsors/Just Homes.png" class="img-full logo" />
        <img src="@/images/sponsors/Shafer Insurance Agency.png" class="img-full logo" />
        <img src="@/images/sponsors/Engert Mechanical Contractors.png" class="img-full logo" />
        <img src="@/images/sponsors/GWRCompany.png" class="img-full logo" />
      </div>
      <div class="scroller-content">
        <img src="@/images/sponsors/Whitson.png" class="img-full logo" />
        <img src="@/images/sponsors/TruTeam.png" class="img-full logo" />
        <img src="@/images/sponsors/TradesMax.png" class="img-full logo" />
        <img src="@/images/sponsors/Resource Valley CTC.png" class="img-full logo" />
        <img src="@/images/sponsors/ProfittAndSons.png" class="img-full logo" />
        <img src="@/images/sponsors/Nationwide Spray Foam.png" class="img-full logo" />
        <img src="@/images/sponsors/McGaha Electric Co.png" class="img-full logo" />
        <img src="@/images/sponsors/Lee Company.png" class="img-full logo" />
        <img src="@/images/sponsors/ComfortSystemsUSA.png" class="img-full logo" />
        <img src="@/images/sponsors/Knoxville Region.png" class="img-full logo" />
        <img src="@/images/sponsors/Joseph Construction.png" class="img-full logo" />
        <img src="@/images/sponsors/Just Homes.png" class="img-full logo" />
        <img src="@/images/sponsors/Shafer Insurance Agency.png" class="img-full logo" />
        <img src="@/images/sponsors/Engert Mechanical Contractors.png" class="img-full logo" />
        <img src="@/images/sponsors/GWRCompany.png" class="img-full logo" />
      </div>
    </div>
  </div>
  <div class="scroller-wrapper mt-8">
    <div class="scroller reverse">
      <div class="scroller-content">
        <img src="@/images/sponsors/Creative Structures Inc.png" class="img-full logo" />
        <img src="@/images/sponsors/Best Buy Metals.png" class="img-full logo" />
        <img src="@/images/sponsors/AGHeins.png" class="img-full logo" />
        <img src="@/images/sponsors/oysk3.jpg" class="img-full logo" />
        <img src="@/images/sponsors/Tindells_new.png" class="img-full logo" />
        <img src="@/images/sponsors/LeConte.png" class="img-full logo" />
        <img src="@/images/sponsors/JnG.png" class="img-full logo" />
        <img src="@/images/sponsors/Funderburk.png" class="img-full logo" />
        <img src="@/images/sponsors/Builders First Source.png" class="img-full logo" />
        <img src="@/images/sponsors/AngelicMinistries.png" class="img-full logo" />
        <img src="@/images/sponsors/84stack_redblue_notag.png" class="img-full logo" style="height: 100px" />
        <img src="@/images/sponsors/stacked_abc_NEW_Stacked.png" class="img-full logo" style="height: 100px"/>
        <img src="@/images/sponsors/StormasterLogo.jpg" class="img-full logo" style="height: 100px"/>
        <img src="@/images/sponsors/RR_Flooring_Logo_Stacked.jpg" class="img-full logo" style="height: 100px"/>
      </div>
      <div class="scroller-content">
        <img src="@/images/sponsors/Creative Structures Inc.png" class="img-full logo" />
        <img src="@/images/sponsors/Best Buy Metals.png" class="img-full logo" />
        <img src="@/images/sponsors/AGHeins.png" class="img-full logo" />
        <img src="@/images/sponsors/oysk3.jpg" class="img-full logo" />
        <img src="@/images/sponsors/Tindells_new.png" class="img-full logo" />
        <img src="@/images/sponsors/LeConte.png" class="img-full logo" />
        <img src="@/images/sponsors/JnG.png" class="img-full logo" />
        <img src="@/images/sponsors/Funderburk.png" class="img-full logo" />
        <img src="@/images/sponsors/Builders First Source.png" class="img-full logo" />
        <img src="@/images/sponsors/AngelicMinistries.png" class="img-full logo" />
        <img src="@/images/sponsors/84stack_redblue_notag.png" class="img-full logo" style="height: 100px" />
        <img src="@/images/sponsors/stacked_abc_NEW_Stacked.png" class="img-full logo" style="height: 100px"/>
        <img src="@/images/sponsors/StormasterLogo.jpg" class="img-full logo" style="height: 100px"/>
        <img src="@/images/sponsors/RR_Flooring_Logo_Stacked.jpg" class="img-full logo" style="height: 100px"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroller-wrapper {
  overflow: hidden;
  width: 100%;
  background: white; /* adjust as needed */
}

.scroller-wrapper:hover .scroller {
  animation-play-state: paused;
}

.scroller {
  display: flex;
  width: max-content;
  animation: scroll 40s linear infinite;
}

.scroller.reverse {
  animation: scroll-reverse 40s linear infinite;
}

.scroller-content {
  display: flex;
}

.logo {
  height: 100px; /* adjust */
  margin: 0 20px;
  object-fit: contain;
}

/* Keyframes for scrolling */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-reverse {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
</style>
