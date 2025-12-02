---
layout: page
title: Research
permalink: /research/
---

<div class="grid-container">
  {% for item in site.research %}
    <div class="card">
      <h3>{{ item.title }}</h3>
      <span class="date">{{ item.date }}</span>
      <p>{{ item.description }}</p>
      <a href="{{ item.url | relative_url }}">Read More</a>
    </div>
  {% endfor %}
</div>
