---
layout: page
title: Photography
permalink: /photography/
---

<div class="gallery-grid">
  {% for photo in site.photography %}
    <div class="photo-item">
      {% if photo.image %}
        <img src="{{ photo.image | relative_url }}" alt="{{ photo.title }}">
      {% endif %}
      <div class="photo-overlay">
        <p>{{ photo.title }}</p>
      </div>
    </div>
  {% endfor %}
</div>
