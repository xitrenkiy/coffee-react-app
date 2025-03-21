import './divider.sass';

function LogoBean({ props, color }) {
	const colored = color || 'white';

	return (
		<div className='divider'>
			<svg
				width={208}
				height={38}
				viewBox="0 0 208 38"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
				>
				<g filter="url(#filter0_d_4_78)">
					<g clipPath="url(#clip0_4_78)">
					<path
						d="M94.3884 26.5504C93.0345 24.1621 93.9555 20.4168 96.7569 17.6151C99.9384 14.4341 104.337 13.6759 106.583 15.9214C106.585 15.9242 106.588 15.9274 106.591 15.9304C106.142 17.2383 104.71 20.0203 100.42 21.5246C96.4894 22.9031 94.9735 25.0955 94.3884 26.5504ZM105.26 19.5906C104.234 20.6175 102.776 21.6253 100.71 22.3503C96.5176 23.8203 95.3463 26.2275 95.0194 27.3931C95.0352 27.409 95.048 27.4255 95.0629 27.4401C97.3084 29.6857 101.708 28.9274 104.888 25.7464C107.719 22.9159 108.629 19.1225 107.214 16.7383C106.874 17.5324 106.281 18.5697 105.26 19.5906ZM96.5846 9.24521C101.114 9.64211 103.564 7.69641 104.512 6.69018C104.51 6.68619 104.509 6.68168 104.508 6.67806C103.387 3.70713 99.0663 2.586 94.8574 4.17405C91.1507 5.57275 88.7681 8.60593 89.0179 11.3398C90.1506 10.2555 92.4351 8.88224 96.5846 9.24521ZM98.9169 14.9334C102.662 13.5206 105.054 10.4387 104.747 7.68311C104.11 8.26655 103.142 8.96808 101.792 9.47782C100.434 9.99006 98.6897 10.3081 96.5089 10.1171C92.0834 9.72906 90.0238 11.4401 89.2453 12.3682C89.2532 12.3889 89.2587 12.4091 89.2659 12.4285C90.387 15.4002 94.7078 16.5218 98.9169 14.9334ZM112.025 8.73791C114.742 5.09208 114.373 1.98481 114.015 0.649699C114.011 0.649256 114.007 0.647703 114.003 0.646816C110.886 0.039928 107.662 3.12782 106.802 7.54314C106.045 11.4328 107.375 15.0529 109.832 16.2767C109.505 14.7432 109.537 12.0782 112.025 8.73791ZM114.984 0.971332C115.145 1.82059 115.234 3.01211 114.958 4.42863C114.681 5.85357 114.035 7.50469 112.727 9.26029C110.072 12.8223 110.446 15.4731 110.827 16.623C110.849 16.6275 110.869 16.6331 110.889 16.6375C114.006 17.2444 117.23 14.157 118.09 9.74126C118.855 5.81187 117.489 2.15716 114.984 0.971332Z"
						fill={colored}
					/>
					</g>
				</g>
				<g filter="url(#filter1_d_4_78)">
					<line x1={4} y1={14.5} x2={64} y2={14.5} stroke={colored} />
				</g>
				<g filter="url(#filter2_d_4_78)">
					<line x1={144} y1={14.5} x2={204} y2={14.5} stroke={colored} />
				</g>
				<defs>
					<filter
					id="filter0_d_4_78"
					x={85}
					y={0}
					width={37.302}
					height={37.302}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
					>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy={4} />
					<feGaussianBlur stdDeviation={2} />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_4_78"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_4_78"
						result="shape"
					/>
					</filter>
					<filter
					id="filter1_d_4_78"
					x={0}
					y={12}
					width={68}
					height={9}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
					>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy={2} />
					<feGaussianBlur stdDeviation={2} />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_4_78"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_4_78"
						result="shape"
					/>
					</filter>
					<filter
					id="filter2_d_4_78"
					x={140}
					y={12}
					width={68}
					height={9}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
					>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy={2} />
					<feGaussianBlur stdDeviation={2} />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_4_78"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_4_78"
						result="shape"
					/>
					</filter>
					<clipPath id="clip0_4_78">
					<rect
						width={29.302}
						height={29.302}
						fill="white"
						transform="translate(89)"
					/>
					</clipPath>
				</defs>
			</svg>
		</div>
	)
}

export default LogoBean;