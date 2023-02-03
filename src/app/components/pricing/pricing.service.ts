import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PricingService {
    constructor(private http: HttpClient) { }

    getPricing() {
        return this.http.get('https://www.primefaces.org/cdn/pricing/blocks.json')
    }
}