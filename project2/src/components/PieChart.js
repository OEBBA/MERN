import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data, width, height }) => {
    const svgRef = useRef();

    useEffect(() => {
        if (!data || data.length === 0) return;

        const colorScale = d3.scaleOrdinal()
            .domain(data.map(d => d.label))
            .range(d3.schemeCategory10);

        const radius = Math.min(width, height) / 2;
        const arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);

        const pie = d3.pie()
            .sort(null)
            .value(d => d.quantity);

        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${width / 2}, ${height / 2})`);

        const arcs = svg.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");

        arcs.append("path")
            .attr("d", arc)
            .attr("fill", d => colorScale(d.data.label))
            .append("title")
            .text(d => `${d.data.label}: ${d.data.quantity}`);

        arcs.append("text")
            .attr("transform", d => `translate(${arc.centroid(d)})`)
            .attr("dy", "0.35em")
            .text(d => d.data.label);

    }, [data, width, height]);

    return (
        <svg ref={svgRef}></svg>
    );
};

export default PieChart;
