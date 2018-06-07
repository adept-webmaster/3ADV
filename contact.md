---
title: Contact Us
permalink: "/contact/"
position: 3
layout: static-page
show: true
---
{::options parse_block_html="true" /}
<div class="col-lg-9">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget sapien
  turpis. In malesuada consectetur luctus. Integer eu tincidunt eros. Quisque nisi
  massa, congue sit amet ex sed, tempor aliquam eros. Interdum et malesuada fames
  ac ante ipsum primis in faucibus. Sed nec justo lorem. Vivamus porttitor urna
  dui, et feugiat risus ornare ac. Sed urna sem, rhoncus vitae varius quis,
  commodo nec nibh.
</div>

<div class="row w-100" markdown="0">
  <div class="col">
    <div class="row justify-content-between w-100 m-0">
      {% for i in (1..3) %}
        <div class="col-3">
          <h2>Contact Us</h2>
          <ul class="list-unstyled">
            <li>Andrew James UK Ltd</li>
            <li>Floor 3, 2 Lighthouse View</li>
            <li>Spectrum Business Park</li>
            <li>Seaham</li>
            <li>SR7 7PR</li>
          </ul>
        </div>
      {% endfor %}
    </div>
  </div>
</div>

<div class="embed-responsive embed-responsive-16by9">
  <iframe src="https://snazzymaps.com/embed/76742" class="embed-responsive-item"></iframe>
</div>
