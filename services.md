---
title: Services
permalink: "/services/"
position: 2
show: true
layout: static-page
---

{::options parse_block_html="true" /}
{::options auto_ids="false" /}

{%- assign services = site.data.services -%}
{% for service in services %}
{% capture service_image %}
{{- service.image -}}
{% endcapture %}

{% capture service_title %}
{{- service.title -}}
{% endcapture %}

{% capture service_content %}
{{- service.content -}}
{% endcapture %}

{% capture service_image_include %}
{% include image.html name=service_image alt=service_title class='img-fluid img-cover services--row-item-image' %}
{% endcapture %}

{% capture noscript_service_image_include %}
{% include noscript-image.html name=service_image alt=service_title class='img-fluid img-cover services--row-item-image' %}
{% endcapture %}

<div class="row services--row-item mb-5 flex-column lazyload js" id="{{ service_title | slugify }}" data-expand="-100">
{{ service_image_include }}

## {{ service.title }}
{{ service.content }}
</div>

<noscript>
<div class="row services--row-item mb-5 flex-column" data-expand="-100">
{{ noscript_service_image_include }}

## {{ service.title }}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget sapien turpis. In malesuada consectetur luctus. Integer eu tincidunt eros. Quisque nisi massa, congue sit amet ex sed, tempor aliquam eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed nec justo lorem. Vivamus porttitor urna dui, et feugiat risus ornare ac. Sed urna sem, rhoncus vitae varius quis, commodo nec nibh.
</div>
</noscript>
{% endfor %}
