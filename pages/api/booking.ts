import { Ipackage, Ipackages } from "../../interface/booking";

export const getPackageById = async (id: string) => {
	try {
		const res = await fetch(`https://api.theelephantsanctuarykrabi.com/Api/packages/${id}`);
		const data = await res.json();
		
        if(data) {
            const resData: Ipackage = {
                itinerary: data.itinerary,
                page_title: data.page_title,
                package: data.package,
                program_include: data.program_include,
                what_bring: data.what_bring,
                pickup: data.pickup,
            }
            return resData;
        }
	} catch (err) {
		console.log(err);
	}
};

export const getPackages = async () => {
	try {
		const res = await fetch(`https://api.theelephantsanctuarykrabi.com/Api/packages`);
		const data = await res.json();
		console.log(data)
        const resData: Ipackages = {
            page_title: data.page_title,
            page: data.page,
            perPage: data.perPage,
            total: data.total,
            packages: data.packages,
        }
        
        return resData;
	} catch (err) {
		console.log(err);
	}
};