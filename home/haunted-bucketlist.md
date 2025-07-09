---
layout: default
title: Haunted Places Bucketlist
permalink: /haunted-bucketlist/
---

# Haunted Places Bucketlist

Here's a Leaflet map:

<div id="map" style="height: 300px;"></div>

<script>
  var map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
</script>
