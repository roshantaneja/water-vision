<!DOCTYPE qgis PUBLIC 'http://mrcc.com/qgis.dtd' 'SYSTEM'>
<qgis maxScale="1" styleCategories="AllStyleCategories" minScale="1e+08" version="3.24.0-Tisler" hasScaleBasedVisibilityFlag="0">
  <flags>
    <Identifiable>1</Identifiable>
    <Removable>1</Removable>
    <Searchable>1</Searchable>
    <Private>0</Private>
  </flags>
  <temporal mode="0" fetchMode="0" enabled="0">
    <fixedRange>
      <start></start>
      <end></end>
    </fixedRange>
  </temporal>
  <customproperties>
    <Option type="Map">
      <Option name="WMSBackgroundLayer" type="bool" value="false"/>
      <Option name="WMSPublishDataSourceUrl" type="bool" value="false"/>
      <Option name="embeddedWidgets/count" type="int" value="0"/>
      <Option name="identify/format" type="QString" value="Value"/>
    </Option>
  </customproperties>
  <pipe-data-defined-properties>
    <Option type="Map">
      <Option name="name" type="QString" value=""/>
      <Option name="properties"/>
      <Option name="type" type="QString" value="collection"/>
    </Option>
  </pipe-data-defined-properties>
  <pipe>
    <provider>
      <resampling zoomedInResamplingMethod="nearestNeighbour" maxOversampling="2" zoomedOutResamplingMethod="nearestNeighbour" enabled="false"/>
    </provider>
    <rasterrenderer classificationMin="2189" type="singlebandpseudocolor" alphaBand="-1" classificationMax="3752" opacity="1" nodataColor="" band="1">
      <rasterTransparency/>
      <minMaxOrigin>
        <limits>CumulativeCut</limits>
        <extent>WholeRaster</extent>
        <statAccuracy>Estimated</statAccuracy>
        <cumulativeCutLower>0.02</cumulativeCutLower>
        <cumulativeCutUpper>0.98</cumulativeCutUpper>
        <stdDevFactor>2</stdDevFactor>
      </minMaxOrigin>
      <rastershader>
        <colorrampshader classificationMode="1" minimumValue="2189" labelPrecision="0" colorRampType="DISCRETE" clip="0" maximumValue="3752">
          <colorramp name="[source]" type="gradient">
            <Option type="Map">
              <Option name="color1" type="QString" value="215,25,28,255"/>
              <Option name="color2" type="QString" value="43,131,186,255"/>
              <Option name="direction" type="QString" value="ccw"/>
              <Option name="discrete" type="QString" value="0"/>
              <Option name="rampType" type="QString" value="gradient"/>
              <Option name="spec" type="QString" value="rgb"/>
              <Option name="stops" type="QString" value="0.25;253,174,97,255;rgb;ccw:0.5;255,255,191,255;rgb;ccw:0.75;171,221,164,255;rgb;ccw"/>
            </Option>
            <prop v="215,25,28,255" k="color1"/>
            <prop v="43,131,186,255" k="color2"/>
            <prop v="ccw" k="direction"/>
            <prop v="0" k="discrete"/>
            <prop v="gradient" k="rampType"/>
            <prop v="rgb" k="spec"/>
            <prop v="0.25;253,174,97,255;rgb;ccw:0.5;255,255,191,255;rgb;ccw:0.75;171,221,164,255;rgb;ccw" k="stops"/>
          </colorramp>
          <item color="#71abd8" value="-4000" alpha="255" label="-4000"/>
          <item color="#79b2de" value="-2000" alpha="255" label="-2000"/>
          <item color="#84b9e3" value="-1000" alpha="255" label="-1000"/>
          <item color="#8dc1ea" value="-750" alpha="255" label="-750"/>
          <item color="#96c9f0" value="-500" alpha="255" label="-500"/>
          <item color="#a1d2f7" value="-250" alpha="255" label="-250"/>
          <item color="#acdbfb" value="-100" alpha="255" label="-100"/>
          <item color="#b9e3ff" value="-50" alpha="255" label="-50"/>
          <item color="#c6ecff" value="-20" alpha="255" label="-20"/>
          <item color="#d8f2fe" value="0" alpha="255" label="0"/>
          <item color="#acd0a5" value="1" alpha="255" label="1"/>
          <item color="#94bf8b" value="20" alpha="255" label="20"/>
          <item color="#a8c68f" value="50" alpha="255" label="50"/>
          <item color="#bdcc96" value="100" alpha="255" label="100"/>
          <item color="#d1d7ab" value="150" alpha="255" label="150"/>
          <item color="#e1e4b5" value="200" alpha="255" label="200"/>
          <item color="#efebc0" value="300" alpha="255" label="300"/>
          <item color="#e8e1b6" value="400" alpha="255" label="400"/>
          <item color="#ded6a3" value="600" alpha="255" label="600"/>
          <item color="#d3ca9d" value="800" alpha="255" label="800"/>
          <item color="#cab982" value="1000" alpha="255" label="1000"/>
          <item color="#c3a76b" value="1500" alpha="255" label="1500"/>
          <item color="#b9985a" value="2000" alpha="255" label="2000"/>
          <item color="#aa8753" value="3000" alpha="255" label="3000"/>
          <item color="#ac9a7c" value="4000" alpha="255" label="4000"/>
          <item color="#baae9a" value="5000" alpha="255" label="5000"/>
          <item color="#cac3b8" value="6000" alpha="255" label="6000"/>
          <item color="#e0ded8" value="7000" alpha="255" label="7000"/>
          <item color="#f5f4f2" value="8000" alpha="255" label="8000"/>
          <rampLegendSettings direction="0" minimumLabel="" maximumLabel="" useContinuousLegend="1" suffix="" prefix="" orientation="2">
            <numericFormat id="basic">
              <Option type="Map">
                <Option name="decimal_separator" type="QChar" value=""/>
                <Option name="decimals" type="int" value="6"/>
                <Option name="rounding_type" type="int" value="0"/>
                <Option name="show_plus" type="bool" value="false"/>
                <Option name="show_thousand_separator" type="bool" value="true"/>
                <Option name="show_trailing_zeros" type="bool" value="false"/>
                <Option name="thousand_separator" type="QChar" value=""/>
              </Option>
            </numericFormat>
          </rampLegendSettings>
        </colorrampshader>
      </rastershader>
    </rasterrenderer>
    <brightnesscontrast gamma="1" contrast="0" brightness="0"/>
    <huesaturation grayscaleMode="0" colorizeOn="0" invertColors="0" saturation="0" colorizeStrength="100" colorizeGreen="128" colorizeRed="255" colorizeBlue="128"/>
    <rasterresampler maxOversampling="2"/>
    <resamplingStage>resamplingFilter</resamplingStage>
  </pipe>
  <blendMode>5</blendMode>
</qgis>
