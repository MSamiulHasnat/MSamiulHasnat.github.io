---
layout: page
title: Hobbies
permalink: /hobbies/
---

<div class="grid-container">
  {% for hobby in site.hobbies %}
    <div class="card">
      <h3>{{ hobby.title }}</h3>
      {% if hobby.videoUrl %}
        <div class="video-container">
          <a href="{{ hobby.videoUrl }}" target="_blank">Watch Video</a>
        </div>
      {% endif %}
    </div>
  {% endfor %}
</div>
