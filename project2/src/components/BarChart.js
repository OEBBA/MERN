import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        if (!data || data.length === 0) return;

        const margin = { top: 20, right: 30, bottom: 30, left: 40 };
        const width = 600 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        const svg = d3.select(svgRef.current)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const x = d3.scaleBand()
            .domain(data.map(d => d.x))
            .range([0, width])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.y)])
            .nice()
            .range([height, 0]);

        svg.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x));

        svg.append('g')
            .call(d3.axisLeft(y));

        svg.selectAll('.bar')
            .data(data)
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('x', d => x(d.x))
            .attr('y', d => y(d.y))
            .attr('width', x.bandwidth())
            .attr('height', d => height - y(d.y))
            .attr('fill', 'steelblue');

        return () => {
            svg.selectAll('*').remove();
        };
    }, [data]);

    return (
        <svg ref={svgRef}></svg>
    );
};

export default BarChart;
